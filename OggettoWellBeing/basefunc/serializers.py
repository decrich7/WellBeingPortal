from rest_framework import serializers
from .models import Event, Expert, Club, Quest, Feedback, MeetMaterials
from api_authentication.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name')


class EventSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=True, read_only=True)

    expert_info = serializers.CharField(source='expert.info')
    expert_fio = serializers.CharField(source='expert.fio')
    expert_links = serializers.CharField(source='expert.links')


    # status = serializers.CharField(source='status.status')

    # def update(self, instance, validated_data):
    #     instance.status = validated_data.get('status', instance.status)
    #
    #     instance.save()
    #     return instance

    class Meta:
        model = Event
        fields = (
            'id', 'name', 'info', 'shedule', 'expert_info', 'expert_fio', 'expert_links', 'photo', 'status', 'user')


class FeedbackSerializer(serializers.ModelSerializer):
    event_name = serializers.CharField(source='event.name')
    expert_fio = serializers.CharField(source='event.expert.fio')
    user_first_name = serializers.CharField(source='user.first_name')
    user_last_name = serializers.CharField(source='user.last_name')

    class Meta:
        model = Feedback
        fields = ('event_name', 'user_first_name', 'user_last_name', 'comment', 'rating', 'expert_fio')


class ExpertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expert
        fields = "__all__"


class ClubSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=True)

    class Meta:
        model = Club
        fields = ('name', 'info', 'photo', 'user')


class QuestSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Quest
        fields = ('name', 'info', 'target', 'deadline', 'photo', 'user')


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeetMaterials
        fields = '__all__'
