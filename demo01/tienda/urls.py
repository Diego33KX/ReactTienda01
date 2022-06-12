from django.urls import re_path as url
from . import views

urlpatterns = [
    url(r'^productos/$',views.products_list),
    url(r'^productos/(?P<pk>[0-9]+)/$',views.product_detail),
    url(r'^categorias/$', views.categories_list),
    url(r'^categorias/(?P<pk>[0-9]+)/$',views.categories_detail),
    url(r'^paises/$',views.country_list),
    url(r'^paises/(?P<pk>[0-9]+)/$',views.country_detail),
]
