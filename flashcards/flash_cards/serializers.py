from rest_framework import serializers
from .models import Collections, Cards


class CollectionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collections
        fields = ['collection_id', 'collection_name']


class CardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cards
        fields = ['card_id', 'key_word', 'definition', 'collection_id']
