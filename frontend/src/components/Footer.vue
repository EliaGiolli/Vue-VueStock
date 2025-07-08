<template>
    <footer class="bg-emerald-500 text-white py-8 px-4 mt-16">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <!-- Brand -->
        <div class="text-lg font-semibold text-white">
          © {{ currentYear }} VueStack. All rights reserved.
        </div>
  
        <!-- Navigation Links -->
        <nav class="flex space-x-6 text-sm">
          <RouterLink to="/" class="hover:text-white transition">Su di noi</RouterLink>
          <RouterLink to="/products" class="hover:text-white transition">Prodotti</RouterLink>
          <RouterLink to="/contacts" class="hover:text-white transition">Contatti</RouterLink>
          <a
            href="https://www.linkedin.com/in/tuo-username"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-white transition"
          >LinkedIn</a>
        </nav>
      </div>
    </footer>
</template>
  
<script setup>
import { RouterLink } from 'vue-router';

const currentYear = new Date().getFullYear();
</script>