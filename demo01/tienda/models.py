from tkinter import CASCADE
from django.db import models

# Create your models here.
class Categories(models.Model):
    nombre = models.CharField(max_length=30)
    pub_date = models.DateField()
    img = models.CharField(max_length=200)
    class Meta:
        db_table = "categories"
    def __str__(self):
        return self.nombre

class Countries(models.Model):
    nombre = models.CharField(max_length=30)
    pub_date = models.DateField()
    img = models.CharField(max_length=200)
    class Meta:
        db_table = "countries"
    def __str__(self):
        return self.nombre

class Products(models.Model):
    nombre = models.CharField(max_length=45)
    categoria = models.ForeignKey(Categories, on_delete=models.CASCADE)
    pais = models.ForeignKey(Countries, on_delete=models.CASCADE)
    precio = models.DecimalField(max_digits=5,decimal_places=2)
    stock = models.IntegerField(default=0)
    marca = models.CharField(max_length=45)
    talla = models.CharField(max_length=5)
    genero = models.CharField(max_length=10)
    img_delante = models.CharField(max_length=200)
    img_atras = models.CharField(max_length=200)
    cantidad = models.IntegerField(default=0)
    descripcion = models.CharField(max_length=500)
    pub_date = models.DateField()
    class Meta:
        db_table = "products"
    def __str__(self):
        return self.nombre
