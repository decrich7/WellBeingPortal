from django.conf import settings
from rest_framework import serializers
from .models import Event, Topic, Expert, Club, Quest, ClubMember, UserQuest


# class UserSerializer(serializers.ModelSerializer):
#     # email = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), many=True)
#     # print(email)
#     class Meta:
#         model = settings.AUTH_USER_MODEL
#         fields = ('email', 'first_name', 'last_name')


class EventSerializer(serializers.ModelSerializer):
    topic = serializers.CharField(source='topic.name')
    # user = UserSerializer(many=True, read_only=True)

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
            'id', 'name', 'topic', 'shedule', 'expert_info', 'expert_fio', 'expert_links', 'photo', 'status')


class ClubMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClubMember
        fields = "__all__"


class UserQuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserQuest
        fields = "__all__"


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = "__all__"


class ExpertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expert
        fields = "__all__"


class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = "__all__"


class QuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quest
        fields = "__all__"
