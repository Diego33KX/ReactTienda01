from dataclasses import field
from rest_framework import serializers
from .models import Categories, Countries, Products

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ('id','nombre','categoria','pais','precio','stock','marca','talla','genero','img_delante','img_atras','img_atras','cantidad','descripcion','pub_date')

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ('id','nombre','pub_date','img')

class CountriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Countries
        fields = ('id','nombre','pub_date','img')