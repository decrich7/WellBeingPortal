from django.urls import path, re_path, include
from .views import (HomeView,
                    # google_login
                    )

urlpatterns = [
    path('home/', HomeView.as_view(), name='home'),
    re_path(r'^auth/', include('drf_social_oauth2.urls', namespace='drf')),
    # path('', google_login, name='login')
]
