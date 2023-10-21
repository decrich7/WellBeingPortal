from django.conf import settings
from rest_framework import serializers
from .models import Event, Topic, Expert, Club, Quest
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


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = "__all__"


class ExpertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expert
        fields = "__all__"


class ClubSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=True, read_only=True)

    def update(self, instance: Club, validated_data: dict):
        print(instance)
        print(validated_data)
        # instance.user = validated_data.get('user')
        # instance.user =
        instance.name = validated_data.get('name', instance.name)

        instance.save()
        return instance

    class Meta:
        model = Club
        fields = ('name', 'info', 'photo', 'user')


class QuestSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Quest
        fields = ('name', 'info', 'target', 'deadline', 'photo', 'user')
