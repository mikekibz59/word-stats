""" application urls defination """
from django.urls import path, re_path
from stats_service.api.viewsets import StatsViewSet

urlpatterns = [
    path('stats/create_stats',
         StatsViewSet.as_view({'post': 'create_stats'})
         )
]
