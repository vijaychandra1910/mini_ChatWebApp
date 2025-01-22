# mini_ChatWebApp

A simple chat web application built using Node.js, Express.js, and MongoDB. This project allows users to send and receive messages, with all messages stored in a MongoDB database. The app does not use real-time WebSockets and instead relies on basic form submissions to update messages.

## Features

- Send and receive messages through HTTP requests.
- Persistent message storage using MongoDB.
- Simple, user-friendly interface.
- Supports basic chat functionality with a page reload to fetch new messages.
- Responsive and mobile-friendly design.

## Tech Stack

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing messages.
- **EJS**: Template engine for rendering dynamic content on the frontend.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (either a local instance or a cloud database like MongoDB Atlas)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/vijaychandra1910/mini_ChatWebApp.git
   cd mini_ChatWebApp
