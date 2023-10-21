from django.urls import path, include
from rest_framework import routers

from .views import EventViewSet, QuestViewSet, ClubViewSet, ExpertViewSet, ClubAPI, EventAPI, QuestAPI, FeedbackViewSet

router = routers.SimpleRouter()
router.register(r'event', EventViewSet)
router.register(r'quest', QuestViewSet)
router.register(r'club', ClubViewSet)
router.register(r'expert', ExpertViewSet)
router.register(r'feedback', FeedbackViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api/v1/club-api/<int:pk>', ClubAPI.as_view()),
    path('api/v1/event-api/<int:pk>', EventAPI.as_view()),
    path('api/v1/quest-api/<int:pk>', QuestAPI.as_view()),
]
