# Generated by Django 3.1.8 on 2021-07-01 16:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Collections',
            fields=[
                ('collection_id', models.IntegerField(primary_key=True, serialize=False)),
                ('collection_name', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='Cards',
            fields=[
                ('card_id', models.IntegerField(primary_key=True, serialize=False)),
                ('key_word', models.CharField(max_length=50)),
                ('definition', models.CharField(max_length=150)),
                ('collection_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='flash_cards.collections')),
            ],
        ),
    ]
