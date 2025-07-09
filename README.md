# 📦 VueStock — Fullstack Inventory Manager

VueStock is a simple yet extensible fullstack application for managing a small product inventory.  
It is built with **Vue 3** (frontend) and **Express.js** (backend), using a **MongoDB** database for persistent storage.  
You can **add products**, **display them dynamically**, and **delete** them. The project is structured for easy extension to full CRUD and further database features.

![Vue 3 + Tailwind CSS](https://img.shields.io/badge/vue-3.x-brightgreen.svg) ![Express](https://img.shields.io/badge/express.js-5.x-black.svg) ![TailwindCSS](https://img.shields.io/badge/tailwind-4.x-blue.svg) ![MongoDB](https://img.shields.io/badge/mongodb-6.x-green.svg) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🗂️ Project Structure

```bash
VueStock/
├── backend/   # Express.js API server (MongoDB database)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── ...
├── frontend/  # Vue 3 + Vite + Tailwind CSS app
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── README.md  # (this file)
└── .gitignore
```

---

# 🖥️ Frontend

## 📦 Main Features
- **Add products** via form
- **Form validation with VeeValidate** for robust and beginner-friendly input checking
- **Dynamic product display** with `v-for`
- **Delete products** (full backend integration)
- **Component-based structure** (`Navbar`, `InputForm`, `Footer`, etc.)
- **Modern UI** with Tailwind CSS
- **PrimeVue** for rich UI components
- **Vue Iconify** for beautiful icons
- **Vue Router** for page navigation
- **Automatic mapping of MongoDB _id to id** for frontend-backend consistency
- **Environment variable support** for API URLs
- **Testing with Vitest and Vue Testing Library**

## 🔧 Technologies & Libraries
- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Vite](https://vitejs.dev/) (build tool)
- [Tailwind CSS](https://tailwindcss.com/) (styling)
- [PrimeVue](https://www.primefaces.org/primevue/) (UI components)
- [Vue Iconify](https://iconify.design/docs/vue/) (icons)
- [VeeValidate](https://vee-validate.logaretm.com/v4/) (form validation)
- [Vue Router](https://router.vuejs.org/) (SPA navigation)
- [Vitest](https://vitest.dev/) & [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro/) (testing)

## 📁 Directory Structure (frontend)
```
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── router/
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── public/
├── package.json
└── ...
```

---

# 🗄️ Backend

## 📦 Main Features
- **REST API** for product inventory
- **Add, fetch, and delete products** (CRUD-ready)
- **Persistent storage with MongoDB** (via Mongoose)
- **MVC architecture** (Models, Controllers, Routes)
- **Environment variable support**
- **CORS enabled** for frontend-backend communication
- **Auto-restart with Nodemon** for development

## 🔧 Technologies & Libraries
- [Express.js](https://expressjs.com/) (API server)
- [Mongoose](https://mongoosejs.com/) (MongoDB object modeling)
- [MongoDB](https://www.mongodb.com/) (database)
- [cors](https://www.npmjs.com/package/cors) (CORS support)
- [dotenv](https://www.npmjs.com/package/dotenv) (environment variables)
- [nodemon](https://www.npmjs.com/package/nodemon) (dev server)

## 📁 Directory Structure (backend)
```
backend/
├── controllers/
│   ├── contactsController.js
│   └── productsController.js
├── models/
│   ├── contacts.js
│   └── product.js
├── routes/
│   ├── contactsRoute.js
│   └── productsRoute.js
├── server.js
├── package.json
└── ...
```

## 🛠️ API Endpoints
All endpoints are prefixed with `/api/products`:
| Method | Endpoint                | Description                |
|--------|------------------------ |---------------------------|
| GET    | `/api/products`         | Get all products           |
| POST   | `/api/products`         | Add a new product          |
| DELETE | `/api/products/:id`     | Delete a product by ID     |

**Note:** The frontend automatically maps MongoDB's `_id` field to `id` for easier handling in Vue. Always use the real MongoDB ObjectId for deletion.

---

# ⚙️ Getting Started

## 1. Clone the repository
```bash
git clone https://github.com/your-username/vue-vuestock.git
cd vue-vuestock
```

## 2. Setup and Run the Backend
```bash
cd backend
npm install
```
Create a `.env` file in the backend folder:
```
LOCALHOST=http://localhost:3000
```
Start the backend server:
```bash
npm run server
```

## 3. Setup and Run the Frontend
```bash
cd ../frontend
npm install
```
Create a `.env` file in the frontend folder:
```
VITE_API_URL=http://localhost:3000
```
Start the frontend dev server:
```bash
npm run dev
```

---

# 📌 Future Goals
- Implement product editing (Update)
- Local Storage (offline/fallback)
- Theme switch (light/dark)
- More advanced testing and CI

---

# 🤝 Contributing
Have ideas or suggestions? Open an issue or send a pull request!  
This project is designed for students, beginners, or anyone who wants to learn Vue 3 and fullstack development in practice.
