<template>
<nav class="w-full h-20 p-3 flex justify-around items-center text-center bg-emerald-500 sticky top-0 border-b-2 border-b-emerald-600">
    <p class="text-2xl uppercase font-bold">LOGO</p>
    <!-- DESKTOP MENU-->
    <ul class="hidden md:flex items-center gap-3">
      <li><a href="/">Su di Noi</a></li>
      <li><a href="/">Servizi</a></li>
      <li><a href="/">Contatti</a></li>
    </ul>
    <Button 
      variant="navbar"
      size="md"
      @click="isOpen = !isOpen"
      >
      {{ isOpen ? 'chiudi' : 'menu' }}
    </Button>
  </nav>
  <!--MOBILE MENU-->
  <div v-if="isOpen" class="md:hidden bg-green-200 w-full flex flex-col items-center gap-3 py-4 border-b border-emerald-500 border-b-2 border-b-emerald-500">
    <a href="/" class="block">Su di Noi</a>
    <a href="/" class="block">Servizi</a>
    <a href="/" class="block">Contatti</a>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue';

const isOpen = ref(false);
</script>