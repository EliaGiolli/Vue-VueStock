# 📦 VueStock — Fullstack Inventory Manager

VueStock is a simple yet extensible fullstack application for managing a small product inventory.  
It is built with **Vue 3** (frontend) and **Express.js** (backend), using a mocked in-memory JavaScript database for now.  
You can **add products**, **display them dynamically**, and **delete** them. The project is structured for easy extension to full CRUD and real database integration.

![Vue 3 + Tailwind CSS](https://img.shields.io/badge/vue-3.x-brightgreen.svg) ![Express](https://img.shields.io/badge/express.js-5.x-black.svg) ![TailwindCSS](https://img.shields.io/badge/tailwind-4.x-blue.svg) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🗂️ Project Structure
```bash
VueStock/
├── backend/          # Express.js API server (mock database)
│   ├── database/     # Database configuration
│   ├── models/       # Data models
│   ├── routes/       # API routes
│   ├── server.js     # Main server file
│   └── package.json  # Backend dependencies
├── frontend/         # Vue 3 + Vite + Tailwind CSS app
│   ├── src/          # Vue source code
│   │   ├── Layouts/  # Vue components
│   │   ├── assets/   # Static assets
│   │   ├── App.vue   # Main Vue component
│   │   └── main.js   # Vue entry point
│   ├── public/       # Public assets
│   └── package.json  # Frontend dependencies
└── README.md         # This file
```

---

## 🚀 Features

- **Add products** via form (frontend)
- **Dynamic product display** with `v-for` (frontend)
- **Delete products** (frontend & backend)
- **REST API** with Express.js (backend)
- **Component-based UI** (Navbar, InputForm, Footer)
- **Modern UI** with Tailwind CSS
- **Environment variable support** for API URLs
- **Hot reload** development servers
- **Ready for MongoDB integration**

---

## 🔧 Technologies Used

### Frontend
- **[Vue 3](https://vuejs.org/)** (Composition API, `<script setup>`)
- **[Vite](https://vitejs.dev/)** (build tool)
- **[Tailwind CSS](https://tailwindcss.com/)** (styling)

### Backend
- **[Express.js](https://expressjs.com/)** (API server)
- **[cors](https://www.npmjs.com/package/cors)** (CORS support)
- **[dotenv](https://www.npmjs.com/package/dotenv)** (environment variables)
- **[nodemon](https://www.npmjs.com/package/nodemon)** (dev server)
- **[mongoose](https://www.npmjs.com/package/mongoose)** (for future MongoDB integration)

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/vue-vuestock.git
cd VueStock
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm run server
```

The backend server will start on [http://localhost:3000](http://localhost:3000).

### 3. Frontend Setup

Open a new terminal window and navigate to the frontend directory:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
echo "VITE_API_URL=http://localhost:3000" > .env

# Start the frontend development server
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173).

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

## 📜 Available Scripts

### Backend Scripts
- `npm run server` — Start the server with nodemon (auto-restarts on changes)
- `npm test` — Placeholder test script

### Frontend Scripts
- `npm run dev` — Start development server with hot reload
- `npm run build` — Build for production
- `npm run preview` — Preview production build

---

## 🔗 Frontend-Backend Communication

The frontend communicates with the backend via HTTP calls:

- **GET** `${import.meta.env.VITE_API_URL}/api/inventory` — Get all products
- **POST** `${import.meta.env.VITE_API_URL}/api/inventory` — Add a product
- **DELETE** `${import.meta.env.VITE_API_URL}/api/inventory/:id` — Delete a product

The API URL is configured via the `VITE_API_URL` environment variable in the frontend's `.env` file.

---

## 📌 Future Goals

- Implement product editing (Update - full CRUD)
- Local Storage (offline/fallback)
- Theme switch (light/dark)
- Integration with a real database (MongoDB)
- User authentication
- Advanced filtering and search

---

## 🤝 Contributing

Have ideas or suggestions? Open an issue or send a pull request!  
This project is designed for students, beginners, or anyone who wants to learn Vue 3 and Express.js in practice.

---

## ⚠️ Important Notes

> **The current implementation uses a mocked in-memory JavaScript database. Data will reset on server restart. A MongoDB database will be implemented soon for persistent storage.**

> **Make sure both backend and frontend servers are running simultaneously for the application to work properly.**
