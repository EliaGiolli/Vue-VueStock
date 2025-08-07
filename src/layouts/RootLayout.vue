
<template>
  <div class="min-h-screen bg-stone-100 text-slate-900">
    <Navbar />
    
    <main class="flex-1">
      <router-view />
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>