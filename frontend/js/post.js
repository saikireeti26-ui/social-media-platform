document.addEventListener('DOMContentLoaded', function() {
    const postId = document.getElementById('post-id').value;
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');
    const likeButton = document.getElementById('like-button');
    const likeCount = document.getElementById('like-count');

    // Function to fetch comments for the post
    function fetchComments() {
        fetch(`/api/posts/${postId}/comments/`)
            .then(response => response.json())
            .then(data => {
                commentList.innerHTML = '';
                data.forEach(comment => {
                    const li = document.createElement('li');
                    li.textContent = comment.text;
                    commentList.appendChild(li);
                });
            });
    }

    // Function to handle comment submission
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = document.getElementById('comment-text').value;

        fetch(`/api/posts/${postId}/comments/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({ text: commentText })
        })
        .then(response => {
            if (response.ok) {
                fetchComments();
                commentForm.reset();
            }
        });
    });

    // Function to handle like button click
    likeButton.addEventListener('click', function() {
        fetch(`/api/posts/${postId}/like/`, {
            method: 'POST',
            headers: {
                'X-CSRFToken': getCookie('csrftoken')
            }
        })
        .then(response => {
            if (response.ok) {
                const newLikeCount = parseInt(likeCount.textContent) + 1;
                likeCount.textContent = newLikeCount;
            }
        });
    });

    // Function to get CSRF token
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    // Initial fetch of comments
    fetchComments();
});