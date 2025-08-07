import { createWebHistory, createRouter } from "vue-router";

const ProductPage = () => import('../pages/ProductPage.vue');
import RootLayout from "@/layouts/RootLayout.vue";
import ContactsForm from "@/pages/ContactsForm.vue";
import HomePage from "@/pages/HomePage.vue";

const routes = [
    {
        path: '/',
        component: RootLayout,
        children: [
           {
            path: '/',
            component: HomePage
           },
           {
            path: '/products',
            component: ProductPage
           },
           {
            path: '/contacts',
            component: ContactsForm
           }
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})