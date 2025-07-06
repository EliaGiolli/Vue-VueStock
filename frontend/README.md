# 📦 Vue Inventory Manager Frontend

A simple yet extensible application built with **Vue 3 + `<script setup>`**, designed to manage a small product inventory.  
You can **add products**, **display them dynamically** with `v-for`, and it's ready for future features like **edit** and **delete** (full CRUD).

![Vue 3 + Tailwind CSS](https://img.shields.io/badge/vue-3.x-brightgreen.svg) ![TailwindCSS](https://img.shields.io/badge/tailwind-4.x-blue.svg) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🚀 Current Features

- ✅ **Add products** via form
- ✅ **Dynamic display** with `v-for`
- ✅ Component-based structure (`Navbar`, `InputForm`, `Footer`)
- ✅ Use of `ref()` and `reactive()` from Vue 3 Composition API
- ✅ Modern UI with **Tailwind CSS**

---

## 🔧 Technologies Used

- **[Vue 3](https://vuejs.org/)** (with Composition API and `<script setup>`)
- **[Tailwind CSS](https://tailwindcss.com/)** v4 for a responsive and modern style
- Vite (for modern frontend development)

---

## ⚙️ Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/vue-inventory-manager.git
cd vue-inventory-manager/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API environment variable

Create a `.env` file in the `frontend` folder with:

```
VITE_API_URL=http://localhost:3000
```

Make sure your backend is running on this port.

### 4. Start the local server

```bash
npm run dev
```

---

## 🔗 Backend Communication

CRUD operations are performed via HTTP calls to the Express backend:

- **GET** `${import.meta.env.VITE_API_URL}/api/inventory` — Get all products
- **POST** `${import.meta.env.VITE_API_URL}/api/inventory` — Add a product
- **DELETE** `${import.meta.env.VITE_API_URL}/api/inventory/:id` — Delete a product

---

## 📌 Future Goals

- Implement product editing (Update)
- Local Storage (offline/fallback)
- Theme switch (light/dark)
- Integration with a real database (MongoDB)

---

## 🤝 Contributing

Have ideas or suggestions? Open an issue or send a pull request!  
This project is designed for students, beginners, or anyone who wants to learn Vue 3 in practice.





