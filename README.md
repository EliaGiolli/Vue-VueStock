# 📦 Vue Inventory Manager Frontend

A simple yet extensible application built with **Vue 3 + `<script setup>`**, designed to manage a small product inventory.  
You can **add products**, **display them dynamically** with `v-for`, and it's ready for future features like **edit** and **delete** (full CRUD).

![Vue 3 + Tailwind CSS](https://img.shields.io/badge/vue-3.x-brightgreen.svg) ![TailwindCSS](https://img.shields.io/badge/tailwind-4.x-blue.svg) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🚀 Current Features

- ✅ **Add products** via form
- ✅ **Dynamic display** with `v-for`
- ✅ **Delete products** (full backend integration)
- ✅ **Component-based structure** (`Navbar`, `InputForm`, `Footer`, etc.)
- ✅ **Form validation with VeeValidate** for robust and beginner-friendly input checking
- ✅ Modern UI with **Tailwind CSS**
- ✅ **Vue Router** for page navigation
- ✅ **PrimeVue** for rich UI components
- ✅ **Vue Iconify** for beautiful icons
- ✅ **Automatic mapping of MongoDB _id to id** for frontend-backend consistency

---

## 🔧 Technologies Used

- **[Vue 3](https://vuejs.org/)** (with Composition API and `<script setup>`)
- **[Vue Router](https://router.vuejs.org/)** for SPA navigation
- **[PrimeVue](https://www.primefaces.org/primevue/)** for modern, accessible UI components
- **[Vue Iconify](https://iconify.design/docs/vue/)** for a huge collection of icons
- **[VeeValidate](https://vee-validate.logaretm.com/v4/)** for easy and powerful form validation
- **[Tailwind CSS](https://tailwindcss.com/)** v4 for a responsive and modern style
- **Vite** (for modern frontend development)

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

## 📌 Future Goals

- Implement product editing (Update)
- Local Storage (offline/fallback)
- Theme switch (light/dark)
- Testing with Vitest and Vue Testing Library

---

## 🤝 Contributing

Have ideas or suggestions? Open an issue or send a pull request!  
This project is designed for students, beginners, or anyone who wants to learn Vue 3 in practice.





