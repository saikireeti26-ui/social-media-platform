// This file contains the main JavaScript functionality for the application, handling user interactions and AJAX requests.

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle user login
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = '/profile/';
            } else {
                alert(data.message);
            }
        });
    });

    // Function to handle post creation
    document.getElementById('post-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const content = document.getElementById('post-content').value;

        fetch('/api/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Add the new post to the page
                const postList = document.getElementById('post-list');
                const newPost = document.createElement('div');
                newPost.innerHTML = `<p>${data.post.content}</p>`;
                postList.prepend(newPost);
                document.getElementById('post-content').value = '';
            } else {
                alert(data.message);
            }
        });
    });

    // Function to handle liking a post
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.dataset.postId;

            fetch(`/api/posts/${postId}/like/`, {
                method: 'POST',
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    this.innerText = `Likes: ${data.likes}`;
                } else {
                    alert(data.message);
                }
            });
        });
    });
});