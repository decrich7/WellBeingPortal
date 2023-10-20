from django.http import JsonResponse
from rest_framework.decorators import api_view


@api_view(["GET"])
def index(request):
    return JsonResponse({
        'asd': 'pisya'
    })
