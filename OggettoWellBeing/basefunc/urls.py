from django.urls import path, include
from rest_framework import routers

from .views import EventViewSet, TopicViewSet, QuestViewSet, ClubViewSet, ExpertViewSet

router = routers.SimpleRouter()
router.register(r'event', EventViewSet)
router.register(r'topic', TopicViewSet)
router.register(r'quest', QuestViewSet)
router.register(r'club', ClubViewSet)
router.register(r'expert', ExpertViewSet)


urlpatterns = [
    path('api/v1/', include(router.urls)),
]
