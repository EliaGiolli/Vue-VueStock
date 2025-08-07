import '../src/style.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import { router } from './router/router';
import App from './App.vue'

createApp(App).use(PrimeVue).use(router).mount('#app');

