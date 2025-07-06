# VueStock Backend

This is the backend for the VueStock project, built with **Express.js** and a mocked in-memory JavaScript database. It provides a simple REST API to manage a product inventory.

---

## 📦 Libraries Used

- [express](https://www.npmjs.com/package/express) - Web framework for Node.js
- [cors](https://www.npmjs.com/package/cors) - Enable Cross-Origin Resource Sharing
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management
- [nodemon](https://www.npmjs.com/package/nodemon) - Auto-restart server on file changes
- [mongoose](https://www.npmjs.com/package/mongoose) - (Not used yet, for future MongoDB integration)

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