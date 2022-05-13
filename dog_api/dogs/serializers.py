from django.forms import CharField
from rest_framework import serializers
from dogs.models import Dog

class DogSerializer(serializers.ModelSerializer):

    breed = serializers.SerializerMethodField()
    size = serializers.SerializerMethodField()
    fur = serializers.SerializerMethodField()


    def get_breed(self, g_model):
        return g_model.breed.breed_name

    def get_size(self, g_model):
        return g_model.size.size_name

    def get_fur(self, g_model):
        return g_model.fur.fur_name

    class Meta:
        model = Dog
        fields=['id','fur','breed','size','photo_URL']
        depth=1
    
    