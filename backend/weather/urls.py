from django.urls import path
from weather.views import LogIn, SignUp, LogOut, Weather, Setting, Profile

urlpatterns= [
    path('login', LogIn.as_view()),
    path('signup', SignUp.as_view()),
    path('logout', LogOut.as_view()),
    path('weather', Weather.as_view()),
    path('setting', Setting.as_view()),
    path('profile', Profile.as_view()),
]