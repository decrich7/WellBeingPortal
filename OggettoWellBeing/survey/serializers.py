from rest_framework import serializers
from .models import Answer, Question, Choice
from api_authentication.models import User


class ChoiceSerializer(serializers.ModelSerializer):
    # percent = serializers.SerializerMethodField()

    class Meta:
        model = Choice
        fields = ['pk', 'title', ]

    # def get_percent(self, obj):
    #     total = Answer.objects.filter(question=obj.question).count()
    #     current = Answer.objects.filter(question=obj.question, choice=obj).count()
    #     if total != 0:
    #         return float(current * 100 / total)
    #     else:
    #         return float(0)


class QuestionSerializer(serializers.ModelSerializer):
    choices = ChoiceSerializer(many=True, source='choice_set', )

    class Meta:
        model = Question
        fields = ['pk', 'title', 'choices', ]


class AnswerSerializer(serializers.Serializer):
    answers = serializers.JSONField()

    def validate_answers(self, answers):
        if not answers:
            raise serializers.Validationerror("Answers must be not null.")
        return answers

    def save(self):
        question = self.data['answers']
        ind0 = int(question[0])
        ind1 = int(question[1])
        ind2 = int(question[2])
        user = User.objects.get(pk=ind0)
        question = Question.objects.get(pk=ind1)
        choice = Choice.objects.get(pk=ind2)
        Answer(user=user, question=question, choice=choice).save()

        # for question_id in answers:  # тут наверное лишняя запятая , ошибка в оригинальном коде
        #     question = Question.objects.get(pk=question_id)
        #     choices = answers[question_id]
        #     for choice_id in choices:
        #         choice = Choice.objects.get(pk=choice_id)
        #         Answer(user=user, question=question, choice=choice).save()
        #         # user.is_answer = True
        #         user.save()

# class StatSerializer(serializers.ModelSerializer):
#     # percent = serializers.SerializerMethodField()
#
#     class Meta:
#         model = Choice
#         fields = ['pk', 'title', ]
#
#     # def get_percent(self, obj):
#     #     total = Answer.objects.filter(question=obj.question).count()
#     #     current = Answer.objects.filter(question=obj.question, choice=obj).count()
#     #     if total != 0:
#     #         return float(current * 100 / total)
#     #     else:
#     #         return float(0)