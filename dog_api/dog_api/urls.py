"""dog_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from dogs.API import get_cool, get_dog, list_all_dogs, list_furs, list_sizes,set_dog,list_breeds

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/cool/', get_cool),
    path('api/dog/new', set_dog),
    path('api/dog/breeds/all', list_breeds),
    path('api/dog/sizes/all', list_sizes),
    path('api/dog/fur/all', list_furs),
    path('api/dog/all', list_all_dogs),
    path('api/dog/get', get_dog),
]
