<template>
  <div class="relative w-full min-h-screen flex flex-col justify-center">
    <!-- Background Image -->
    <img
      src="/herosection-img.jpg"
      alt="immagine di sfondo che vede due ragazze che lavorano in un magazzino"
      role="presentation"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />

    <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>

    <div class="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-4">
      <h1 class="text-4xl md:text-6xl font-bold">Gestisci il tuo magazzino con semplicità</h1>
      <p class="mt-4 text-lg md:text-xl">Aggiungi, modifica, elimina. Tutto il tuo inventario in un’unica dashboard.</p>
      <RouterLink to="/products">
        <Button size="lg" aria-label="Vai alla pagina dei prodotti per prenotare un prodotto" class="mt-6 flex gap-2">
            <Icon icon="lucide:mouse-pointer-click" width="24" height="24" />
            <span>Prenota ora</span>
        </Button>
     </RouterLink>
    </div>
  </div>
</template>


<script setup>
import Button from './Button.vue';
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';
</script>