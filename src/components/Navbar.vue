<template>
<nav class="w-full h-20 p-3 flex justify-around items-center text-center md:text-lg bg-emerald-500 sticky top-0 z-50 border-b-2 border-b-emerald-600">
    <RouterLink to="/" class="text-white text-2xl uppercase font-bold">VueStock</RouterLink>
    <!-- DESKTOP MENU-->
    <ul class="hidden md:flex items-center gap-4">
      <li>
        <RouterLink to="/" class="text-white hover:bg-lime-500 rounded-md transition-all duration-200">Su di Noi</RouterLink>
      </li>
      <li>
        <RouterLink to="/products" class="text-white hover:bg-lime-500 rounded-md transition-all duration-200">Prodotti</RouterLink>
      </li>
      <li>
        <RouterLink to="/contacts" class="text-white hover:bg-lime-500 rounded-md transition-all duration-200">Contatti</RouterLink>
      </li>
    </ul>
    <Button
      aria-label="bottone per aprire il menu mobile" 
      :aria-expanded="isOpen.toString()"
      aria-controls="mobile-menu"
      class="flex md:hidden"
      variant="navbar"
      size="md"
      @click="isOpen = !isOpen"
      >
      <Icon v-if="isOpen" icon="lucide:minimize-2" width="24" height="24" />
      <Icon v-else icon="lucide:menu" width="24" height="24" />
    </Button>
  </nav>
  <!--MOBILE MENU-->
  <ul v-if="isOpen"
    aria-label="mobile menu" 
    id="mobile-menu"
    class="sticky top-20 left-0 z-50 md:hidden bg-emerald-600 w-full flex flex-col items-center gap-3 py-4 border-b-2 border-emerald-800">
    <li>
      <RouterLink to="/" @click="isOpen = false" class="block text-white hover:bg-lime-500 rounded-md transition-all duration-200">Su di Noi</RouterLink>
    </li>
    <li>
      <RouterLink to="/products" @click="isOpen = false" class="block text-white hover:bg-lime-500 rounded-md transition-all duration-200">Prodotti</RouterLink>
    </li>
    <li>
      <RouterLink to="/contacts" @click="isOpen = false" class="block text-white hover:bg-lime-500 rounded-md transition-all duration-200">Contatti</RouterLink>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';
import Button from './Button.vue';

const isOpen = ref(false);
</script>