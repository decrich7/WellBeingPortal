from django.shortcuts import render
from rest_framework import generics
# Create your views here.
from .models import Event
from .serializers import EventSerializer




class EventAPIList(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventAPIUpdate(generics.UpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
