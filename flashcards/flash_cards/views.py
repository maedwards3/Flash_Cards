from .models import Collections
from .models import Cards
from .serializers import CardsSerializer
from .serializers import CollectionsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render


class CollectionsList(APIView):

    def get(self, request):
        collection = Collections.objects.all()
        serializer = CollectionsSerializer(collection, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CollectionsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.errors, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CardsList(APIView):

    def get(self, request):
        card = Cards.objects.all()
        serializer = CardsSerializer(card, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CardsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.errors, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

