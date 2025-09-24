# Mini Social Media Application

This project is a mini social media application built using Django for the backend and HTML, CSS, and JavaScript for the frontend. It allows users to create profiles, make posts, comment on posts, and follow other users.

## Project Structure

```
mini-social-media-app
├── backend
│   ├── manage.py
│   ├── requirements.txt
│   ├── socialmedia
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   └── app
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── views.py
│       ├── urls.py
│       ├── serializers.py
│       └── migrations
│           └── __init__.py
├── frontend
│   ├── index.html
│   ├── profile.html
│   ├── post.html
│   ├── css
│   │   └── styles.css
│   └── js
│       ├── main.js
│       ├── profile.js
│       └── post.js
└── README.md
```

## Features

- **User Profiles**: Users can create and manage their profiles.
- **Posts**: Users can create posts that can be liked and commented on.
- **Comments**: Users can comment on posts.
- **Like System**: Users can like posts.
- **Follow System**: Users can follow each other to see updates.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd mini-social-media-app
   ```

2. **Backend Setup**:
   - Navigate to the `backend` directory.
   - Install the required packages:
     ```
     pip install -r requirements.txt
     ```
   - Run migrations:
     ```
     python manage.py migrate
     ```
   - Start the server:
     ```
     python manage.py runserver
     ```

3. **Frontend Setup**:
   - Open `frontend/index.html` in a web browser to access the application.

## Usage

- Create an account to start using the application.
- Post updates, comment on others' posts, and interact with users by following them.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.