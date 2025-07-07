# VueStock Backend

This is the backend for the VueStock project, built with **Express.js** and a mocked in-memory JavaScript database. It provides a simple REST API to manage a product inventory.

---

## 📦 Libraries Used

- [express](https://www.npmjs.com/package/express) - Web framework for Node.js
- [cors](https://www.npmjs.com/package/cors) - Enable Cross-Origin Resource Sharing
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management
- [nodemon](https://www.npmjs.com/package/nodemon) - Auto-restart server on file changes
- [mongoose](https://www.npmjs.com/package/mongoose) - MongoDB object modeling for Node.js

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository (if you haven't already):

   ```sh
   git clone <your-repo-url>
   cd VueStock/backend
   ```

2. Install dependencies

   ```sh
   npm install
   ```

---

## Running the Server

Start the backend server with:

```sh
npm run server
```

The server will start on [http://localhost:3000](http://localhost:3000).

---

## 🛠️ API Endpoints

All endpoints are prefixed with `/api/inventory`.

| Method | Endpoint                | Description                |
|--------|------------------------ |---------------------------|
| GET    | `/api/inventory`        | Get all products           |
| POST   | `/api/inventory`        | Add a new product          |
| DELETE | `/api/inventory/:id`    | Delete a product by ID     |

### Example Product Object

```json
{
  "id": 123456789,
  "name": "iPhone 14",
  "price": 799,
  "quantity": 10
}
```
## 🗄️ How MongoDB Works in This Project

The VueStock backend now uses **MongoDB** as its persistent database, replacing the previous in-memory storage. All product data is stored in a MongoDB collection, ensuring that your inventory is saved even after server restarts.

- **Connection:**  
  The backend connects to a MongoDB instance using [Mongoose](https://mongoosejs.com/), which provides a schema-based solution to model your application data.
- **Schema:**  
  A Mongoose schema defines the structure of each product (fields like `name`, `price`, `quantity`), ensuring data consistency.
- **CRUD Operations:**  
  All API endpoints interact with MongoDB through Mongoose models. When you add, fetch, or delete products, these actions are performed directly on the database.

**Example:**  
When you send a POST request to `/api/inventory`, the backend creates a new document in the MongoDB `products` collection.  
A GET request fetches all documents (products) from the collection.

---

## 🏗️ MVC Architecture in VueStock Backend

The backend follows the **MVC (Model-View-Controller)** pattern for clean code organization and scalability:

- **Model:**  
  Defines the data structure and handles all interactions with MongoDB.  
  Example: The `Product` model (using Mongoose) describes what a product is and provides methods to create, read, and delete products in the database.

- **View:**  
  Since this is an API backend, there are no traditional views (HTML templates). Instead, the "view" is the JSON data sent as API responses.

- **Controller:**  
  Contains the business logic for each API endpoint. Controllers receive requests, interact with the model, and return responses.  
  Example: The inventory controller handles requests to add, fetch, or delete products by calling the appropriate model methods and sending JSON responses.

**Benefits of MVC:**
- Separation of concerns (data, logic, and response handling are kept distinct)
- Easier to maintain and extend
- Promotes code reusability and clarity


---

## 📜 Useful Scripts

- `npm run server` — Start the server with nodemon (auto-restarts on changes)
- `npm test` — Placeholder test script

---

## 📝 Git Commands

- Clone the repo:  
  `git clone <your-repo-url>`
- Pull latest changes:  
  `git pull`
- Add and commit changes:  
  `git add . && git commit -m "Your message"`
- Push changes:  
  `git push`

---

## ⚠️ Note

> **A MongoDB database will be implemented soon, as soon as I have the right knowledge. For now, data is stored in-memory and will reset on server restart.**