from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer

    # Overriding retrieve to handle GET /api/posts/:id/
    def retrieve(self, request, pk=None):
        post = self.get_object()
        serializer = PostSerializer(post)
        return Response(serializer.data)

    # Overriding update to handle PUT /api/posts/:id/
    def update(self, request, pk=None):
        post = self.get_object()
        serializer = PostSerializer(post, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    # Overriding destroy to handle DELETE /api/posts/:id/
    def destroy(self, request, pk=None):
        post = self.get_object()
        post.delete()
        return Response(status=204)
