<template>
<nav class="w-full h-20 p-3 flex justify-around items-center text-center bg-emerald-500 sticky top-0 border-b-2 border-b-emerald-600">
    <RouterLink to="/" class="text-white text-2xl uppercase font-bold">VueStock</RouterLink>
    <!-- DESKTOP MENU-->
    <ul class="hidden md:flex items-center gap-4">
      <RouterLink to="/" class="text-white hover:bg-lime-500 hover:p-2 rounded-md">Su di Noi</RouterLink>
      <RouterLink to="/products" class="text-white hover:bg-lime-500 hover:p-2 rounded-md">Prodotti</RouterLink>
      <RouterLink to="/contacts" class="text-white hover:bg-lime-500 hover:p-2 rounded-md">Contatti</RouterLink>
    </ul>
    <Button 
      class="flex md:hidden"
      variant="navbar"
      size="md"
      @click="isOpen = !isOpen"
      >
      {{ isOpen ? 'chiudi' : 'menu' }}
    </Button>
  </nav>
  <!--MOBILE MENU-->
  <div v-if="isOpen" class="md:hidden bg-emerald-600 w-full flex flex-col items-center gap-3 py-4 border-b-2 border-emerald-800">
    <RouterLink to="/" class="block text-white hover:bg-lime-500 hover:p-2 rounded-md">Su di Noi</RouterLink>
    <RouterLink to="/products" class="block text-white hover:bg-lime-500 hover:p-2 rounded-md">Prodotti</RouterLink>
    <RouterLink to="/contacts" class="block text-white hover:bg-lime-500 hover:p-2 rounded-md">Contatti</RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Button from './Button.vue';

const isOpen = ref(false);
console.log(isOpen.value)
</script>