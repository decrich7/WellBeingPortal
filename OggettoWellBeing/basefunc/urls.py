from django.urls import path, include
from rest_framework import routers

from .views import (EventViewSet, QuestViewSet, ClubViewSet, ExpertViewSet, ClubAPI, EventAPI, QuestAPI,
                    FeedbackViewSet, VideoViewSet, SuggestExpertViewSet, MeetQuestionsViewSet, StatisticAPI,
                    StatAmountSuggest, StatAmountMeetQuestions, StatAmountFeedback, return_current_user)

router = routers.SimpleRouter()
router.register(r'event', EventViewSet)
router.register(r'quest', QuestViewSet)
router.register(r'club', ClubViewSet)
router.register(r'expert', ExpertViewSet)
router.register(r'feedback', FeedbackViewSet)
router.register(r'materials', VideoViewSet)
router.register(r'suggests', SuggestExpertViewSet)
router.register(r'meet-questions', MeetQuestionsViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api/v1/club-api/<int:pk>', ClubAPI.as_view()),
    path('api/v1/event-api/<int:pk>', EventAPI.as_view()),
    path('api/v1/quest-api/<int:pk>', QuestAPI.as_view()),
    path('api/v1/statistic', StatisticAPI.as_view()),
    path('api/v1/stat-sugger', StatAmountSuggest.as_view()),
    path('api/v1/stat-meet-questions', StatAmountMeetQuestions.as_view()),
    path('api/v1/stat-feedback', StatAmountFeedback.as_view()),
    path('api/v1/me', return_current_user)
]
