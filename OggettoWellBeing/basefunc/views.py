from typing import Union
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.views import APIView

from api_authentication.models import User
from .models import Event, Club, Quest, Expert, Feedback, MeetMaterials
from .serializers import EventSerializer, ClubSerializer, QuestSerializer, ExpertSerializer, \
    FeedbackSerializer, VideoSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer


class QuestViewSet(viewsets.ModelViewSet):
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer


class ExpertViewSet(viewsets.ModelViewSet):
    queryset = Expert.objects.all()
    serializer_class = ExpertSerializer


class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer


class ClubAPI(APIView):
    def post(self, request, **kwargs):
        query_data: dict = request.data
        current_club: Union[Club, None] = Club.objects.get(pk=kwargs.get("pk"))
        user: Union[User, None] = User.objects.get(email=query_data.get("user")[0].get("email"))
        current_club.user.add(user, through_defaults={"email": user.email, "first_name": user.first_name,
                                                      "last_name": user.last_name})
        serializator = ClubSerializer(current_club)
        return JsonResponse({
            'name': current_club.name,
            'info': current_club.info,
            'user': serializator.data
        })


class EventAPI(APIView):
    def post(self, request, **kwargs):
        query_data: dict = request.data
        current_event: Union[Club, None] = Event.objects.get(pk=kwargs.get("pk"))
        user: Union[User, None] = User.objects.get(email=query_data.get("user")[0].get("email"))
        current_event.user.add(user, through_defaults={"email": user.email, "first_name": user.first_name,
                                                       "last_name": user.last_name})

        serializator = EventSerializer(current_event)
        return JsonResponse({
            **serializator.data
        })


class QuestAPI(APIView):
    def post(self, request, **kwargs):
        query_data: dict = request.data
        current_quest: Union[Club, None] = Quest.objects.get(pk=kwargs.get("pk"))
        user: Union[User, None] = User.objects.get(email=query_data.get("user")[0].get("email"))
        current_quest.user.add(user, through_defaults={"email": user.email, "first_name": user.first_name,
                                                       "last_name": user.last_name})

        serializator = QuestSerializer(current_quest)
        return JsonResponse({
            **serializator.data
        })


class VideoViewSet(viewsets.ModelViewSet):
    queryset = MeetMaterials.objects.all()
    serializer_class = VideoSerializer
