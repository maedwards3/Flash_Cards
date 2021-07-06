from django.urls import path
from . import views

urlpatterns = [
    path('collection/', views.CollectionsList.as_view()),
    path('collectionDetail/<int:collection_id>/', views.CollectionsDetail.as_view()),
    path('collection/<int:collection_id>/card/', views.CardsList.as_view()),
    path('collection/<int:collection_id>/cardDetail/<int:card_id>/', views.CardsDetail.as_view())
]
