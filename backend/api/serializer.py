from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    short_description = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'short_description', 'image', 'created_at', 'updated_at']

    def get_short_description(self, obj):
        return obj.short_description()
