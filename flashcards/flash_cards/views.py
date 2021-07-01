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
    def get_collection(self, pk):
        try:
            return Collections.objects.get(collection_id=pk)
        except Collections.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        collection = self.get_collection(pk)
        serializer = CollectionsSerializer(collection)
        return Response(serializer.data)

    def put(self, request, pk):
        collection = self.get_collection(pk)
        serializer = CollectionsSerializer(collection, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        collections = self.get_collection(pk)
        collections.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class CardsList(APIView):

    def get(self, request):
        card = Cards.objects.all()
        serializer = CardsSerializer(card, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CardsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

