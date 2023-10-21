from rest_framework import serializers
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

from .models import Event


class EventSerializer(serializers.ModelSerializer):
    topic = serializers.CharField(source='topic.name')
    shedule = serializers.DateTimeField(source='shedule.date_time_event')
    expert_info = serializers.CharField(source='expert.info')
    expert_fio = serializers.CharField(source='expert.fio')
    expert_links = serializers.CharField(source='expert.links')
    # status = serializers.CharField(source='status.status')

    def update(self, instance, validated_data):
        instance.status = validated_data.get('status', instance.status)

        # TODO: update people

        instance.save()
        return instance
    class Meta:
        model = Event
        fields = ('id', 'name', 'topic', 'shedule', 'expert_info', 'expert_fio', 'expert_links', 'photo', 'status')



