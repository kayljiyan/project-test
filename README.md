# Project-TEST

This repository contains a **simple full-stack application** with:

- 📦 **FastAPI backend** (Python)
- ⚛️ **Next.js frontend** (React)
- 🐳 **Docker Compose** for running both together

## 🧠 Overview

This project demonstrates:

- A file upload form in Next.js
- A FastAPI endpoint that receives the uploaded file
- A local development environment using Docker

## 🚀 Tech Stack

| Component       | Technology                   |
| --------------- | ---------------------------- |
| Backend         | FastAPI (Python)             |
| Frontend        | Next.js (React + Typescript) |
| Dev Environment | Docker & Docker Compose      |

## 📁 Project Structure

```
/backend           # FastAPI API
/frontend          # Next.js frontend app
docker-compose.yml # Services config
```

## 🐳 Run with Docker

Make sure you have **Docker & Docker Compose** installed.

To start both frontend and backend:

```bash
docker compose up --build -d
```

This will:

- Build the backend and frontend
- Start both services
- Expose:
  - Backend → `http://localhost:8000`
  - Frontend → `http://localhost:3000`

## 🧪 Verify

- Visit `http://localhost:8000/docs` to test the FastAPI API.
- Visit `http://localhost:3000` to use the upload UI.

## 📌 Notes

- The app uses Docker networking so the frontend and backend can communicate inside containers.
- The browser must still use `localhost` to reach services running in Docker.
