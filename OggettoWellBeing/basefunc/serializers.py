from rest_framework import serializers
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

from .models import Event, Topic, Expert, Club, Quest


class EventSerializer(serializers.ModelSerializer):
    topic = serializers.CharField(source='topic.name')
    schedule = serializers.DateTimeField(source='shedule')
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
        fields = ('id', 'name', 'topic', 'schedule', 'expert_info', 'expert_fio', 'expert_links', 'photo', 'status')


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
