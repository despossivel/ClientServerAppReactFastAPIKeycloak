# Client-Server Application Architecture with ReactJS, FastAPI, and Keycloak

This README provides an overview of the architecture and instructions for running a client-server application built with ReactJS for the front-end, FastAPI (Python) for the back-end, and Keycloak for authentication and user management. The application can be run locally using the provided scripts or in a Docker container.

## Architecture Overview

The client-server application follows a microservices architecture with three main components:

1. **Front-End (ReactJS)**:
   - The front-end is developed using ReactJS, a popular JavaScript library for building user interfaces.
   - It communicates with the back-end to fetch data and perform actions through API requests.
   - The front-end serves as the user interface, rendering web pages and handling user interactions.

2. **Back-End (FastAPI)**:
   - The back-end is implemented using FastAPI, a modern, fast (high-performance) web framework for building APIs with Python.
   - It provides RESTful APIs and handles requests from the front-end, including data retrieval, processing, and storage.
   - FastAPI also manages the application's business logic and interacts with databases or other services as needed.

3. **Authentication and User Management (Keycloak)**:
   - Keycloak is used to handle user authentication, authorization, and user management.
   - It provides secure authentication and access control, allowing users to log in and manage their accounts.
   - Keycloak integration ensures that your application is secure and compliant with identity and access management best practices.

## Prerequisites

Before running the application, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/): Required for running the ReactJS front-end.
- [Python](https://www.python.org/): Required for the FastAPI back-end.
- [Docker](https://www.docker.com/): Required if you prefer to run the application in a Docker container.
- [Keycloak](https://www.keycloak.org/): Set up and configure Keycloak for authentication and user management. Ensure that Keycloak is running and accessible.

## Getting Started

### Running Locally

To run the application locally without Docker, follow these steps:

1. **Front-End**:
   - Navigate to the `client` directory and install the necessary dependencies:

     ```bash
     cd client
     npm install
     ```

   - Start the ReactJS development server:

     ```bash
     npm start
     ```

   The front-end will be available at `http://localhost:3000`.

2. **Back-End**:
   - In `root` directory and create a virtual environment:

   - Install the Python dependencies:

     ```bash
     pip install -r requirements.txt
     ```

   - Start the FastAPI server:

     ```bash
     uvicorn main:app --host 0.0.0.0 --port 8000 --reload
     ```

   The back-end will be available at `http://localhost:8000`.

3. **Keycloak Integration**:
   - Configure your front and backend to use Keycloak for authentication and authorization.
   - Update the appropriate Keycloak settings in your application to enable secure user authentication.

### Running with Docker

If you prefer to run the application in Docker containers, use the provided Docker Compose configuration. Make sure you have Docker installed and running.

```bash
docker-compose -f docker-compose.dev.yml up -d --build
```

This command will build and start the containers in detached mode. The client will be available at `http://localhost:5173`, and the back-end will be available at `http://localhost:8000`.

To stop the containers when you are done, use the following command:

```bash
docker-compose -f docker-compose.dev.yml down
```

## Additional Configuration

You can customize the application's configuration, including Keycloak integration settings, by modifying environment variables, database connections, or other settings in the respective `client/.env` and `./.env` files.

## Conclusion

You now have a client-server application running with ReactJS for the front-end, FastAPI for the back-end, and Keycloak for authentication and user management. Follow the provided steps to run the application either locally or in Docker containers. Customize the application's Keycloak settings to ensure secure user authentication and authorization.

If you have any questions or encounter issues, please refer to the documentation for ReactJS, FastAPI, or Keycloak, or seek assistance from the development team.