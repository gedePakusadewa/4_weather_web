from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, SettingSerializer
from rest_framework import status, generics
from django.contrib.auth.models import User
from weather.models import Setting as SettingModel
from rest_framework.authtoken.models import Token

from django.shortcuts import get_object_or_404

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.conf import settings

import requests
from django.http import JsonResponse

class LogIn(generics.GenericAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        user = get_object_or_404(User, username=request.data['username'])

        if not user.check_password(request.data['password']):
            return Response({"detail":"Not Found"}, status=status.HTTP_404_NOT_FOUND)

        token, created = Token.objects.get_or_create(user=user)
        serializer = UserSerializer(instance=user)

        return Response({"token":token.key, "user":serializer.data})

class SignUp(generics.GenericAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=request.data['username'])
            user.set_password(request.data['password'])
            user.save()
            token = Token.objects.create(user=user)

            return Response({"token":token.key, "user":serializer.data})
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogOut(generics.GenericAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def delete(self, request):
        try:
            request.user.auth_token.delete()
        except:
            pass

        return Response(
            {"Success":"Success Log Out"},
            status=status.HTTP_200_OK
        )

class Weather(generics.GenericAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_setting(self, user_id):
        try:        
            return SettingModel.objects.get(user_id=user_id)
        except Exception as e:
            return None

    def get(self, request):
        weather_url = getattr(settings, "WEATHER_API", None)
        weather_api_key = getattr(settings, "WEATHER_API_KEY", None)

        user_id = Token.objects.get(key=request.auth.key).user_id
        settingData = self.get_setting(user_id)

        try:
            url = weather_url + "?key=" + weather_api_key + "&q=" + settingData.city + "&aqi=no&alerts=no&days=8"
            response = requests.get(url)
            data = response.json()
            
            return JsonResponse(data)
        except:
            return Response(
                {"Error":"Something wrong"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
class Setting(generics.GenericAPIView):
    serializer_class = SettingSerializer
    queryset = SettingModel.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user_id = Token.objects.get(key=request.auth.key).user_id
        settingData = self.get_setting(user_id)
        if  settingData == None:
            serializer_class = self.serializer_class(data=request.data)

            if serializer_class.is_valid():
                serializer_class.save()

                return Response(serializer_class.data, status=status.HTTP_201_CREATED)
        else:
            serializer_class = self.serializer_class(settingData, data=request.data, partial=True)

            if serializer_class.is_valid():
                serializer_class.save()

                return Response(serializer_class.data, status=status.HTTP_200_OK)
        
        return Response(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_setting(self, user_id):
        try:        
            return SettingModel.objects.get(user_id=user_id)
        except Exception as e:
            return None
    
    def get(self, request):        
        user_id = Token.objects.get(key=request.auth.key).user_id
        settingData = self.get_setting(user_id)

        if not settingData:
            return Response(
                {
                    "status": "fail",
                    "message": "Setting config not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )
        
        serializer_class = self.serializer_class(settingData)
        
        return Response(serializer_class.data)
    
class Profile(generics.GenericAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_setting(self, user_id):
        try:        
            return SettingModel.objects.get(user_id=user_id)
        except Exception as e:
            return None

    def get(self, request):        
        user_id = Token.objects.get(key=request.auth.key).user_id
        settingData = self.get_setting(user_id)
        user = User.objects.get(pk=user_id)

        if not settingData:
            return Response(
                {
                    "status": "fail",
                    "message": "Setting config not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )
        
        serializer_setting = SettingSerializer(settingData)
        serializer_user = self.serializer_class(instance=user)

        return Response({"user" : serializer_user.data, "setting" : serializer_setting.data})
    