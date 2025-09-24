// This file contains JavaScript specific to the user profile page, managing profile updates and follower interactions.

document.addEventListener('DOMContentLoaded', function() {
    const followButton = document.getElementById('follow-button');
    const profileInfo = document.getElementById('profile-info');
    
    if (followButton) {
        followButton.addEventListener('click', function() {
            const userId = followButton.dataset.userId;
            const isFollowing = followButton.classList.contains('following');

            fetch(`/api/follow/${userId}/`, {
                method: isFollowing ? 'DELETE' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                }
            })
            .then(response => {
                if (response.ok) {
                    followButton.classList.toggle('following');
                    followButton.textContent = isFollowing ? 'Follow' : 'Unfollow';
                    updateFollowerCount(isFollowing);
                } else {
                    console.error('Error following/unfollowing user');
                }
            });
        });
    }

    function updateFollowerCount(isFollowing) {
        const followerCount = document.getElementById('follower-count');
        let count = parseInt(followerCount.textContent);
        followerCount.textContent = isFollowing ? count - 1 : count + 1;
    }

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
});