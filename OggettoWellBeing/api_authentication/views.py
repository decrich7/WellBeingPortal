import requests
from django.conf import settings
from django.contrib import messages
from django.contrib.auth import login
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.urls import reverse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class HomeView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Welcome to the Social Authentication (Email) page using React Js and Django!'}
        return Response(content)


# def google_login(request):
#     redirect_uri = "%s://%s%s" % (
#         request.scheme, request.get_host(), reverse('home')
#     )
#     if ('code' in request.GET):
#         params = {
#             'grant_type': 'authorization_code',
#             'code': request.GET.get('code'),
#             'redirect_uri': redirect_uri,
#             'client_id': settings.SOCIAL_AUTH_GOOGLE_OAUTH2_KEY,
#             'client_secret': settings.SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET
#         }
#         url = 'https://accounts.google.com/o/oauth2/token'
#         response = requests.post(url, data=params)
#         url = 'https://www.googleapis.com/oauth2/v1/userinfo'
#         access_token = response.json().get('access_token')
#         response = requests.get(url, params={'access_token': access_token})
#         user_data = response.json()
#         print(user_data)
#         email = user_data.get('email')
#         if email:
#             user, _ = User.objects.get_or_create(email=email, username=email)
#             gender = user_data.get('gender', '').lower()
#             if gender == 'male':
#                 gender = 'M'
#             elif gender == 'female':
#                 gender = 'F'
#             else:
#                 gender = 'O'
#             data = {
#                 'first_name': user_data.get('name', '').split()[0],
#                 'last_name': user_data.get('family_name'),
#                 'google_avatar': user_data.get('picture'),
#                 'gender': gender,
#                 'is_active': True
#             }
#             user.__dict__.update(data)
#             user.save()
#             user.backend = settings.AUTHENTICATION_BACKENDS[0]
#             login(request, user)
#         else:
#             messages.error(
#                 request,
#                 'Unable to login with Gmail Please try again'
#             )
#         return redirect('/')
#     else:
#         url = "https://accounts.google.com/o/oauth2/auth?client_id=%s&response_type=code&scope=%s&redirect_uri=%s&state=google"
#         scope = [
#             "https://www.googleapis.com/auth/userinfo.profile",
#             "https://www.googleapis.com/auth/userinfo.email"
#         ]
#         scope = " ".join(scope)
#         url = url % (settings.SOCIAL_AUTH_GOOGLE_OAUTH2_KEY, scope, redirect_uri)
#         return redirect(url)
