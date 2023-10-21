from rest_framework import generics, viewsets
from .models import Event, Topic, Club, Quest, Expert, ClubMember, UserQuest
from .serializers import EventSerializer, TopicSerializer, ClubSerializer, QuestSerializer, ExpertSerializer, \
    ClubMemberSerializer, UserQuestSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer


class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer


class QuestViewSet(viewsets.ModelViewSet):
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer


class ExpertViewSet(viewsets.ModelViewSet):
    queryset = Expert.objects.all()
    serializer_class = ExpertSerializer


class ClubMemberViewSet(viewsets.ModelViewSet):
    queryset = ClubMember.objects.all()
    serializer_class = ClubMemberSerializer


class UserQuestViewSet(viewsets.ModelViewSet):
    queryset = UserQuest.objects.all()
    serializer_class = UserQuestSerializer
