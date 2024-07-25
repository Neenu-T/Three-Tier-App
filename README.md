# 3-Tier Application

## Overview

This project is a 3-tier application consisting of a Client Side (React),
Node.js Service, and Python Service with a PostgreSQL database.
The client application communicates with the Node.js service, which in turn communicates with the Python service to handle data operations. 
The goal is to have a functional application where the client can interact with a list of elements that updates in real-time.

## Project Structure

- `client/`: Contains the React client application.
- `node-service/`: Contains the Node.js service.
- `python-service/`: Contains the Python service with PostgreSQL integration.

## Setup

### Prerequisites

- Node.js (v21.5.0 or compatible)
- Python (3.x)
- PostgreSQL
- Git

### Installation

1. **Clone the Repository**

   ```bash
    https://github.com/Neenu-T/Three-tier-App.git
    cd Three-tier-App

## Technologies Used

- **Node.js**: Backend API and WebSocket server.
- **Express**: Web framework for Node.js.
- **Python**: Backend data handling with FastAPI.
- **PostgreSQL**: Database for storing data.
- **React**: Front-end user interface.
- **Docker**: Containerization for deployment.

## Setup and Installation

### Prerequisites

- Docker: Make sure Docker is installed and running on your machine.
- Docker Compose: Install Docker Compose if not included with Docker.

### Setup

1. **Clone the repository:**
   ```bash
   https://github.com/Neenu-T/Three-tier-App.git
   cd Three-tier-App
