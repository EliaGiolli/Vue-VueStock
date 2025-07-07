# 📦 VueStock — Fullstack Inventory Manager

VueStock is a simple yet extensible fullstack application for managing a small product inventory.  
It is built with **Vue 3** (frontend) and **Express.js** (backend), now using a **MongoDB** database for persistent storage.  
You can **add products**, **display them dynamically**, and **delete** them. The project is structured for easy extension to full CRUD and further database features.


![Vue 3 + Tailwind CSS](https://img.shields.io/badge/vue-3.x-brightgreen.svg) ![Express](https://img.shields.io/badge/express.js-5.x-black.svg) ![TailwindCSS](https://img.shields.io/badge/tailwind-4.x-blue.svg) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🗂️ Project Structure
```bash
VueStock/ │ 
    ├── backend/ # Express.js API server (MongoDB database) 
    ├── frontend/ # Vue 3 + Vite + Tailwind CSS app 
    ├── README.md # (this file) └── .gitignore
```

---

## 🚀 Features

- **Add products** via form (frontend)
- **Dynamic product display** (frontend)
- **Delete products** (frontend & backend)
- **REST API** (backend)
- **Component-based UI** (frontend)
- **Modern UI** with Tailwind CSS
- **Environment variable support** for API URLs
- **Ready for MongoDB integration**

---

## 🔧 Technologies Used

- **Frontend:**  
  - [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
  - [Vite](https://vitejs.dev/) (build tool)
  - [Tailwind CSS](https://tailwindcss.com/) (styling)
- **Backend:**  
  - [Express.js](https://expressjs.com/) (API server)
  - [cors](https://www.npmjs.com/package/cors) (CORS support)
  - [dotenv](https://www.npmjs.com/package/dotenv) (environment variables)
  - [nodemon](https://www.npmjs.com/package/nodemon) (dev server)
  - [mongoose](https://www.npmjs.com/package/mongoose) (for future MongoDB integration)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/vue-vuestock.git
cd vue-vuestock
```
### 2. Setup and Run the Backend
```bash
cd backend
npm install
```
Create a .env file in the backend folder:
```bash
LOCALHOST=http://localhost:3000
```