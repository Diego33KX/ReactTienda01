from ast import Try
from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from .models import Products,Categories,Countries
from .serializers import CategoriesSerializer, ProductsSerializer,CountriesSerializer


class JSONResponse(HttpResponse):
    def __init__(self,data,**kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type']='application/json'
        super(JSONResponse,self).__init__(content,**kwargs)
@csrf_exempt
def products_list(request):
    if request.method == 'GET':
        products = Products.objects.all()
        serializer = ProductsSerializer(products,many=True)
        return JSONResponse(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProductsSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data,status=201)
        return JSONResponse(serializer.error,status=400)
@csrf_exempt
def product_detail(request,pk):
    try:
        product = Products.objects.get(pk=pk)
    except Products.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET':
        serializer = ProductsSerializer(product)
        return JSONResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ProductsSerializer(product,data = data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data)
        return JSONResponse(serializer.errors,status=400)
    elif request.method == 'DELETE':
        product.delete()
        return HttpResponse(status=204)


@csrf_exempt
def categories_list(request):
    if request.method == 'GET':
        categories = Categories.objects.all()
        serializer = CategoriesSerializer(categories,many=True)
        return JSONResponse(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CategoriesSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data,status=201)
        return JSONResponse(serializer.errors,status=400)
@csrf_exempt
def categories_detail(request,pk):
    try:
        categories = Categories.objects.get(pk=pk)
    except Categories.DoesNotExist:
        return HttpResponse(status = 404)
    if request.method == 'GET':
        serializer = CategoriesSerializer(categories)
        return JSONResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = CategoriesSerializer(categories,data = data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data)
        return JSONResponse(serializer.errors,status=400)
    elif request.method == 'DELETE':
        categories.delete()
        return HttpResponse(status=204)


@csrf_exempt
def country_list(request):
    if request.method == 'GET':
        countries = Countries.objects.all()
        serializer = CountriesSerializer(countries,many=True)
        return JSONResponse(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CountriesSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data,status=201)
        return JSONResponse(serializer.errors, status=400)
@csrf_exempt
def country_detail(request,pk):
    try:
        country = Countries.objects.get(pk=pk)
    except Countries.DoesNotExist:
        return HttpResponse(status = 404)
    if request.method == 'GET':
        serializer = CountriesSerializer(country)
        return JSONResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = CountriesSerializer(country,data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data)
        return JSONResponse(serializer.errors,status=400)
    elif request.method == 'DELETE':
        country.delete()
        return HttpResponse(status=204)

