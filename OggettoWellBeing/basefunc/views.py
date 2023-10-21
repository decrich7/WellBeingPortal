from django.http import JsonResponse
from rest_framework import generics, viewsets
from .models import Event,  Club, Quest, Expert
from .serializers import EventSerializer, ClubSerializer, QuestSerializer, ExpertSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


# class TopicViewSet(viewsets.ModelViewSet):
#     queryset = Topic.objects.all()
#     serializer_class = TopicSerializer


class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer



    # def update(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     print(request.data)
    #     serializer: ClubSerializer = self.get_serializer(instance, data=request.data,
    #                                                      partial=kwargs.get('partial'))
    #     serializer.is_valid(raise_exception=True)
    #     print(serializer.data)

class QuestViewSet(viewsets.ModelViewSet):
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer


class ExpertViewSet(viewsets.ModelViewSet):
    queryset = Expert.objects.all()
    serializer_class = ExpertSerializer
