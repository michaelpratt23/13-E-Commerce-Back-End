# E-Commerce Back End

## Description

This project is a back-end application for an e-commerce website, built using Node.js, Express.js, Sequelize, and PostgreSQL. It provides a RESTful API that allows users to manage products, categories, and tags, including the ability to create, read, update, and delete data.

## Features

- Uses Sequelize ORM to interact with a PostgreSQL database.
- Implements full CRUD (Create, Read, Update, Delete) operations.
- Supports relational data between products, categories, and tags.
- RESTful API routes for seamless integration.
- Stores environment variables securely using dotenv.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies
4. Use Insomnia or Postman to test API endpoints.

## API Endpoints

- **Categories**
- `GET /api/categories`
- `GET /api/categories/:id`
- `POST /api/categories`
- `PUT /api/categories/:id`
- `DELETE /api/categories/:id`

- **Products**
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

- **Tags**
- `GET /api/tags`
- `GET /api/tags/:id`
- `POST /api/tags`
- `PUT /api/tags/:id`
- `DELETE /api/tags/:id`

## Walkthrough Video

A walkthrough video demonstrating the functionality of the application can be found at the following link:

[Watch the Video](https://drive.google.com/file/d/1u_Zv_6T6C06uFiI-hh7EA4rw_4Mgyvao/view?usp=sharing)

## License

This project is licensed under the MIT License.

---
