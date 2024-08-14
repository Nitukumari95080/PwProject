

# User Management Backend

## Description
A simple user management backend using Express.js and MongoDB. It includes user registration and login functionality with JWT authentication.

## Endpoints

### Register
- **POST** `/api/auth/register`
- **Request Body**: `{ "name": "User Name", "email": "user@example.com", "password": "password123" }`
- **Response**: `{ "msg": "User registered successfully" }`

### Login
- **POST** `/api/auth/login`
- **Request Body**: `{ "email": "user@example.com", "password": "password123" }`
- **Response**: `{ "token": "JWT_TOKEN" }`

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
