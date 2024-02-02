from django.db import models
from django.contrib.auth.models import User

class Setting(models.Model):
    city = models.CharField(max_length=100)
    unit = models.CharField(max_length=20)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        def __str__(self) -> str:
            return self.city
