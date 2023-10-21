from django.conf import settings
from rest_framework import serializers
from .models import Event, Expert, Club, Quest
from api_authentication.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name')


class EventSerializer(serializers.ModelSerializer):
    topic = serializers.CharField(source='topic.name')
    user = UserSerializer(many=True, read_only=True)

    expert_info = serializers.CharField(source='expert.info')
    expert_fio = serializers.CharField(source='expert.fio')
    expert_links = serializers.CharField(source='expert.links')

    # status = serializers.CharField(source='status.status')

    def update(self, instance, validated_data):
        instance.status = validated_data.get('status', instance.status)

        instance.save()
        return instance

    class Meta:
        model = Event
        fields = (
            'id', 'name', 'topic', 'shedule', 'expert_info', 'expert_fio', 'expert_links', 'photo', 'status', 'user')


# class TopicSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Topic
#         fields = "__all__"


class ExpertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expert
        fields = "__all__"


class ClubSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=True)


    # def get_or_create_packages(self, packages):
    #     package_ids = []
    #     for package in packages:
    #         package_instance, created = User.objects.get_or_create(pk=package.get('id'), defaults=package)
    #         package_ids.append(package_instance.pk)
    #     return package_ids
    #
    # def create_or_update_packages(self, packages):
    #     package_ids = []
    #     for package in packages:
    #         package_instance, created = User.objects.update_or_create(pk=package.get('id'), defaults=package)
    #         package_ids.append(package_instance.pk)
    #     return package_ids
    #
    # def create(self, validated_data):
    #     package = validated_data.pop('user', [])
    #     order = User.objects.create(**validated_data)
    #     order.package.set(self.get_or_create_packages(package))
    #     return order
    #
    # def update(self, instance, validated_data):
    #     package = validated_data.pop('user', [])
    #     instance.package.set(self.create_or_update_packages(package))
    #     fields = ['user']
    #     for field in fields:
    #         try:
    #             setattr(instance, field, validated_data[field])
    #         except KeyError:  # validated_data may not contain all fields during HTTP PATCH
    #             pass
    #     instance.save()
    #     return instance

    class Meta:
        model = Club
        fields = ('name', 'info', 'photo', 'user')


class QuestSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Quest
        fields = ('name', 'info', 'target', 'deadline', 'photo', 'user')
