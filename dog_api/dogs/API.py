import json
from os import stat
from unittest import result
from rest_framework.decorators import api_view
from rest_framework.response import Response
from dogs.models import Dog, Size,Fur,Breed
from rest_framework import status
from dogs.serializers import DogSerializer
from rest_framework.parsers import JSONParser


@api_view(['GET'])
def get_cool(request):
    return Response({'cool': Fur.objects.all(), 'uncool': 228})

@api_view(['GET'])
def get_dog(request):
    if 'id' not in request.query_params:
        return Response(status= status.HTTP_404_NOT_FOUND)

    dog_id=request.query_params['id']

    fur=request.query_params.get('fur',None)
    size = request.query_params.get('size', None)
    breed = request.query_params.get('breed', None)

    print("id: " + dog_id)

    params = {'id':dog_id}

    if fur != None:
        params['fur'] = fur
    if size != None:
        params['size'] = size
    if breed != None:
        params['breed'] = breed

    results = Dog.objects.select_related().filter(**params)

    if len(results) < 1:
        return Response(status.HTTP_404_NOT_FOUND)

    if len(results)==1:
        return Response(DogSerializer(results[0]).data)
    else: 
        return Response(DogSerializer(results,many=True))

@api_view(['GET'])
def list_breeds(request):
    return Response(Breed.objects.all().values())

@api_view(['GET'])
def list_sizes(request):
    return Response(Size.objects.all().values())

@api_view(['GET'])
def list_furs(request):
    return Response(Fur.objects.all().values())

@api_view(['GET'])
def list_all_dogs(request):

    #serializer=DogSerializer(,many=True)
    qs=Dog.objects.all().select_related()
    print(qs.query)


    # l=[]

    # for query in qs:
    #     resp={'id':query.id,'breed':query.breed.breed_name,'size':query.size.size_name,'fur':query.fur.fur_name,'img':query.photo_URL}
    #     l.append(resp)
    # return Response(l)

    return Response(DogSerializer(qs,many=True).data)

@api_view(['POST'])
def set_dog(request):
    
    data=json.loads(request.body)

    print(request.headers)
    
    s=Size(ID=data['id'],Size=data['size'])

    print(s.ID)
    print(s.Size)

    return Response(Size.objects.all().values())