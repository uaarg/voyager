Steps to Set Up the Project Locally

# Setup

## Backend

1. Clone the repository

   ```
   Clone the Repository and cd into it
   ```

2. Setup virtual environment

   ```
   pip install virtualenv
   python3.12 -m venv venv
   source venv/bin/activate
   ```

3. Setup backend
   ```
   cd backend
   pip install -r requirements.txt
   python manage.py makemigrations
   python manage.py migrate
   ```
4. Run the backend server
   ```
   python manage.py runserver
   ```

## Frontend

1. Setup frontend

   ```
   cd frontend
   npm install
   ```

2. Run the frontend server
   ```
   npm start
   ```
