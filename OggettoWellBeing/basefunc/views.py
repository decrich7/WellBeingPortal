from rest_framework import generics, viewsets
from .models import Event, Topic, Club, Quest, Expert
from .serializers import EventSerializer, TopicSerializer, ClubSerializer, QuestSerializer, ExpertSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer


class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer

    def update(self, request, *args, **kwargs):
        club = self.get_object()
        print(args)
        print(kwargs)
        club.user.clear()
        return super().update(request, *args, **kwargs)


class QuestViewSet(viewsets.ModelViewSet):
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer


class ExpertViewSet(viewsets.ModelViewSet):
    queryset = Expert.objects.all()
    serializer_class = ExpertSerializer
