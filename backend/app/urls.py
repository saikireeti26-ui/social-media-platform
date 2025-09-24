from django.urls import path
from . import views

urlpatterns = [
    path('users/<int:user_id>/', views.UserProfileView.as_view(), name='user_profile'),
    path('posts/', views.PostListView.as_view(), name='post_list'),
    path('posts/<int:post_id>/', views.PostDetailView.as_view(), name='post_detail'),
    path('posts/<int:post_id>/comments/', views.CommentListView.as_view(), name='comment_list'),
    path('posts/<int:post_id>/like/', views.LikePostView.as_view(), name='like_post'),
    path('follow/<int:user_id>/', views.FollowUserView.as_view(), name='follow_user'),
]