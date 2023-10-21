from typing import Union

from django.http import JsonResponse
from rest_framework import generics, viewsets, serializers
from rest_framework.views import APIView

from api_authentication.models import User
from .models import Event, Club, Quest, Expert
from .serializers import EventSerializer, TopicSerializer, ClubSerializer, QuestSerializer, ExpertSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


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


class ClubAPI(APIView):
    def post(self, request, **kwargs):
        query_data: dict = request.data
        current_club: Union[Club, None] = Club.objects.get(pk=kwargs.get("pk"))
        user: Union[User, None] = User.objects.get(email=query_data.get("user")[0].get("email"))
        current_club.user.add(user, through_defaults={"email": user.email, "first_name": user.first_name,
                                                      "last_name": user.last_name})
        print(current_club.user.all().values())
        print(serializers.serialize('json', current_club.user.all().values()))
        return JsonResponse({
            'name': current_club.name,
            'info': current_club.info,
            'user': current_club.user.all().values_list()
        })
