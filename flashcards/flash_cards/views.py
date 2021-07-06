from .models import Collections
from .models import Cards
from .serializers import CardsSerializer
from .serializers import CollectionsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
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
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CollectionsDetail(APIView):
    def get_collection(self, collection_id):
        try:
            return Collections.objects.get(collection_id=collection_id)
        except Collections.DoesNotExist:
            raise Http404

    def get(self, request, collection_id):
        collection = self.get_collection(collection_id)
        serializer = CollectionsSerializer(collection)
        return Response(serializer.data)

    def put(self, request, collection_id):
        collection = self.get_collection(collection_id)
        serializer = CollectionsSerializer(collection, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, collection_id):
        collections = self.get_collection(collection_id)
        collections.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CardsList(APIView):
    def get(self, request, collection_id):
        cards = Cards.objects.filter(collection_id=collection_id).all()
        serializer = CardsSerializer(cards, many=True)
        return Response(serializer.data)

    def post(self, request, collection_id):
        serializer = CardsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CardsDetail(APIView):

    def get_card(self, card_id):
        try:
            return Cards.objects.get(card_id=card_id)
        except Cards.DoesNotExist:
            raise Http404

    def get(self, request, collection_id, card_id):
        card = self.get_card(card_id)
        serializer = CardsSerializer(card)
        return Response(serializer.data)

    def put(self, request, collection_id, card_id):
        card = self.get_card(card_id)
        serializer = CardsSerializer(card, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, collection_id, card_id):
        card = self.get_card(card_id)
        card.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
