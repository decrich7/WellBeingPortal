from django.shortcuts import render

from .serializers import QuestionSerializer, AnswerSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.response import Response
from .models import Question


class GetQuestion(GenericAPIView):
    # permission_classes = (IsAuthenticated,)
    serializer_class = QuestionSerializer

    def get(self, request, format=None):
        questions = Question.objects.all()
        last_point = QuestionSerializer(questions, many=True)
        return Response(last_point.data)



class QuestionAnswer(GenericAPIView):
    # permission_classes = (IsAuthenticated,)
    serializer_class = AnswerSerializer

    def post(self, request, format=None):
        print(request.data)
        answer = AnswerSerializer(data=request.data, context=request)
        if answer.is_valid(raise_exception=True):
            answer.save()
            return Response({'result': 'OK'})


# class QuestionStat(GenericAPIView):
#     # permission_classes = (IsAuthenticated,)
#     # serializer_class = QuestionSerializer
#
#     def get(self, request, format=None):
#
#         questions = Question.objects.all()
#         last_point = QuestionSerializer(questions, many=True)
#         return Response(last_point.data)