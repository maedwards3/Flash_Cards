from django.db import models


class Collections(models.Model):
    collection_id = models.IntegerField(primary_key=True)
    collection_name = models.CharField(max_length=25)


class Cards(models.Model):
    card_id = models.IntegerField(primary_key=True)
    key_word = models.CharField(max_length=50)
    definition = models.CharField(max_length=150)
    collection_id = models.ForeignKey(Collections, blank=True, null=True, on_delete=models.CASCADE)
