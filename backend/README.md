# Mini Social Media App Backend

This is the backend for the Mini Social Media Application built using Django. The application allows users to create profiles, make posts, comment on posts, and follow other users.

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd mini-social-media-app/backend
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required packages:**
   ```
   pip install -r requirements.txt
   ```

4. **Run migrations:**
   ```
   python manage.py migrate
   ```

5. **Create a superuser (optional):**
   ```
   python manage.py createsuperuser
   ```

6. **Run the development server:**
   ```
   python manage.py runserver
   ```

## Usage

- Access the API endpoints for user profiles, posts, comments, and follow functionalities.
- Use the Django admin interface to manage users and content.

## Project Structure

- **manage.py**: Command-line utility for managing the Django project.
- **requirements.txt**: Lists the required Python packages.
- **socialmedia/**: Contains the main Django project settings and configurations.
- **app/**: Contains the application logic, including models, views, and serializers.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.