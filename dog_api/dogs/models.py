from statistics import mode
from django.db import models

class Fur(models.Model):
    fur_name=models.CharField(max_length=100)

class Breed(models.Model):
    breed_name=models.CharField(max_length=100)

class Size(models.Model):
    size_name=models.CharField(max_length=100)

    def __str__():
        return "size"

class Dog(models.Model):
    breed=models.ForeignKey(Breed,on_delete=models.CASCADE)
    fur=models.ForeignKey(Fur,on_delete=models.CASCADE)
    size=models.ForeignKey(Size,on_delete=models.CASCADE)
    photo_URL=models.CharField(max_length=200)



    