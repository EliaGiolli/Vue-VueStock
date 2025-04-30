<template>
<nav class="w-full h-20 p-3 flex justify-around items-center text-center bg-green-200 sticky top-0 border-b-2 border-b-emerald-600">
    <p class="text-2xl uppercase font-bold">LOGO</p>
    <!-- DESKTOP MENU-->
    <ul class="hidden md:flex items-center gap-3">
      <li><a href="/">About</a></li>
      <li><a href="/">Tours</a></li>
      <li><a href="/">Contacts</a></li>
    </ul>
    <button 
      class="md:hidden bg-emerald-500 hover:bg-emerald-600 p-2 rounded-lg"
      @click="isOpen = !isOpen"
      >
      {{ isOpen ? 'chiudi' : 'menu' }}
    </button>
  </nav>
  <!--MOBILE MENU-->
  <div v-if="isOpen" class="md:hidden bg-green-200 w-full flex flex-col items-center gap-3 py-4 border-b border-emerald-500 border-b-2 border-b-emerald-500">
    <a href="/" class="block">About</a>
    <a href="/" class="block">Tours</a>
    <a href="/" class="block">Contacts</a>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>