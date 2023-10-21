from django.urls import path, include
from rest_framework import routers

from .views import EventViewSet, QuestViewSet, ClubViewSet, ExpertViewSet, ClubAPI

router = routers.SimpleRouter()
router.register(r'event', EventViewSet)
router.register(r'quest', QuestViewSet)
router.register(r'club', ClubViewSet)
router.register(r'expert', ExpertViewSet)


urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api/v1/club-api/', ClubAPI.as_view())
]
