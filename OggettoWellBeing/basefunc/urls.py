from django.urls import path, include
from rest_framework import routers

from .views import EventViewSet, TopicViewSet, QuestViewSet, ClubViewSet, ExpertViewSet, ClubMemberViewSet, \
    UserQuestViewSet

router = routers.SimpleRouter()
router.register(r'event', EventViewSet)
router.register(r'topic', TopicViewSet)
router.register(r'quest', QuestViewSet)
router.register(r'club', ClubViewSet)
router.register(r'expert', ExpertViewSet)
router.register(r'club-member', ClubMemberViewSet)
router.register(r'user-quest', UserQuestViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
]
