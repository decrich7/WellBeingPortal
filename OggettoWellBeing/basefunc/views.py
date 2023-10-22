from typing import Union

from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from survey.models import Question, Choice, Answer
from api_authentication.models import User
from .models import Event, Club, Quest, Expert, Feedback, MeetMaterials, SuggestExpert, MeetQuestions

from .serializers import EventSerializer, ClubSerializer, QuestSerializer, ExpertSerializer, \
    FeedbackSerializer, VideoSerializer, SuggestExpertSerializer, MeetQuestionsSerializer, UserSerializer


@api_view(["GET"])
@login_required
def return_current_user(request):
    serialized_data = UserSerializer(request.user).data
    try:
        profile_picture = 'http://' + request.get_host() + request.user.profile_picture.url
    except ValueError:
        profile_picture = 'no avatar'
    return JsonResponse({
        **serialized_data,
        'login': True,
        'profile_picture': profile_picture
    })


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class ClubViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Club.objects.all()
    serializer_class = ClubSerializer


class QuestViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer


class ExpertViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Expert.objects.all()
    serializer_class = ExpertSerializer


class FeedbackViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer


class SuggestExpertViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = SuggestExpert.objects.all()
    serializer_class = SuggestExpertSerializer


class MeetQuestionsViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = MeetQuestions.objects.all()
    serializer_class = MeetQuestionsSerializer


class VideoViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = MeetMaterials.objects.all()
    serializer_class = VideoSerializer


class StatisticAPI(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, **kwargs):
        question_id = request.data.get('q_id')
        current_question = Question.objects.get(pk=question_id)
        choices = Choice.objects.filter(question=current_question)
        answers = Answer.objects.filter(question=current_question)
        count_all_answers = answers.count()
        count_answer = dict()
        for choice in choices:
            count_answer.update({
                choice.title: answers.filter(choice=choice).count()
            })
        for key, value in count_answer.items():
            print(key, value / count_all_answers * 100)


class StatAmountSuggest(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        amount = SuggestExpert.objects.all().count()
        return JsonResponse({
            'amount_suggest': amount
        })


class StatAmountFeedback(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        amount = Feedback.objects.all().count()
        return JsonResponse({
            'amount_feedback': amount
        })


class StatAmountMeetQuestions(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        amount = MeetQuestions.objects.all().count()
        return JsonResponse({
            'amount_meet_questions': amount
        })


class ClubAPI(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, **kwargs):
        query_data: dict = request.data
        current_club: Union[Club, None] = Club.objects.get(pk=kwargs.get("pk"))
        user: Union[User, None] = User.objects.get(email=request.user.email)
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
        user: Union[User, None] = User.objects.get(email=request.user.email)
        current_event.user.add(user, through_defaults={"email": user.email, "first_name": user.first_name,
                                                       "last_name": user.last_name})

        serializator = EventSerializer(current_event)
        return JsonResponse({
            **serializator.data
        })


class QuestAPI(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, **kwargs):
        query_data: dict = request.data
        current_quest: Union[Club, None] = Quest.objects.get(pk=kwargs.get("pk"))
        user: Union[User, None] = User.objects.get(email=request.user.email)
        current_quest.user.add(user, through_defaults={"email": user.email, "first_name": user.first_name,
                                                       "last_name": user.last_name})

        serializator = QuestSerializer(current_quest)
        return JsonResponse({
            **serializator.data
        })
