from django.urls import path
from . import views

urlpatterns = [
    path('collection/', views.CollectionsList.as_view()),
    path('collectionDetail/<int:collection_id>/', views.CollectionsDetail.as_view()),
    path('card/', views.CardsList.as_view())
]
