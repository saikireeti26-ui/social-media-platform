from django.urls import path
from app import views

urlpatterns = [
    path('api/users/', views.UserList.as_view(), name='user-list'),
    path('api/users/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),
    path('api/posts/', views.PostList.as_view(), name='post-list'),
    path('api/posts/<int:pk>/', views.PostDetail.as_view(), name='post-detail'),
    path('api/comments/', views.CommentList.as_view(), name='comment-list'),
    path('api/comments/<int:pk>/', views.CommentDetail.as_view(), name='comment-detail'),
    path('api/followers/', views.FollowList.as_view(), name='follow-list'),
]