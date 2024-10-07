Steps to Set Up the Project Locally

# Setup
## Backend
1. 
    ```
    Clone the Repository and cd into it
    ```
2. 
    ```
    cd backend
    pip freeze > requirements.txt
    pip install -r requirements.txt
    python manage.py makemigrations
    python manage.py migrate
    ```
    
3. Run the server
    ```
    python manage.py runserver
    ```

## Frontend
```
    cd frontend
    npm install
    npm start
```