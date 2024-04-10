# Node.js CRUD Operations with Express.js and MongoDB

This repository demonstrates basic CRUD (Create, Read, Update, Delete) operations using Node.js with Express.js framework and MongoDB as the database. CRUD operations are fundamental to most web applications as they involve creating, reading, updating, and deleting data from a database.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your_username/nodejs-express-mongo-crud.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nodejs-express-mongo-crud
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Make sure MongoDB is running on your local machine.

5. Start the server:

   ```bash
   npm start
   ```

6. Once the server is running, you can access the API endpoints using a tool like Postman or curl.

## API Endpoints

### Create

- **Endpoint:** `POST /api/items`
- **Description:** Creates a new item.
- **Request Body:**
  ```json
  {
    "name": "Sample Item",
    "description": "This is a sample item."
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Item created successfully.",
    "data": {
      "_id": "60eab3d158cc78229b8c6e90",
      "name": "Sample Item",
      "description": "This is a sample item.",
      "createdAt": "2024-07-10T08:36:49.140Z",
      "updatedAt": "2024-07-10T08:36:49.140Z",
      "__v": 0
    }
  }
  ```

### Read

- **Endpoint:** `GET /api/items`
- **Description:** Retrieves all items.
- **Response:**

  ```json
  {
    "success": true,
    "data": [
      {
        "_id": "60eab3d158cc78229b8c6e90",
        "name": "Sample Item",
        "description": "This is a sample item.",
        "createdAt": "2024-07-10T08:36:49.140Z",
        "updatedAt": "2024-07-10T08:36:49.140Z",
        "__v": 0
      }
    ]
  }
  ```

- **Endpoint:** `GET /api/items/:id`
- **Description:** Retrieves a specific item by its ID.
- **Response:**
  ```json
  {
    "success": true,
    "data": {
      "_id": "60eab3d158cc78229b8c6e90",
      "name": "Sample Item",
      "description": "This is a sample item.",
      "createdAt": "2024-07-10T08:36:49.140Z",
      "updatedAt": "2024-07-10T08:36:49.140Z",
      "__v": 0
    }
  }
  ```

### Update

- **Endpoint:** `PUT /api/items/:id`
- **Description:** Updates an existing item.
- **Request Body:**
  ```json
  {
    "name": "Updated Item",
    "description": "This item has been updated."
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Item updated successfully.",
    "data": {
      "_id": "60eab3d158cc78229b8c6e90",
      "name": "Updated Item",
      "description": "This item has been updated.",
      "createdAt": "2024-07-10T08:36:49.140Z",
      "updatedAt": "2024-07-10T08:40:31.317Z",
      "__v": 0
    }
  }
  ```

### Delete

- **Endpoint:** `DELETE /api/items/:id`
- **Description:** Deletes an item by its ID.
- **Response:**
  ```json
  {
    "success": true,
    "message": "Item deleted successfully."
  }
  ```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify this project for your purposes. Contributions are welcome!
