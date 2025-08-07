<template>

    <main class="container mx-auto py-8">
      <section class="flex flex-col items-center justify-center text-left md:border-l-4 border-l-emerald-500 p-6 md:py-4 md:px-2 my-10 mx-auto">
        <h1 class="text-emerald-800 text-2xl font-bold">VueStock - Gestione del magazzino virtuale</h1>
        <p>VueStock è un'applicazione web che permette di gestire un magazzino virtuale.
          <br>
          Inserisci i prodotti nel magazzino e visualizza l'inventario.
        </p>
      </section>
      <InputForm @addProduct="handleAddProduct" />
      <InventoryItems ref="inventoryRef" />
    </main>

</template>

<script setup>
import InputForm from '@/components/InputForm.vue';
import InventoryItems from '@/components/InventoryItems.vue';
import { ref } from 'vue';
import { products } from '@/mock/products.js'; // <-- NEW: import local array

const inventoryRef = ref(null);

const handleAddProduct = (product) => {
  // Add product to local array
  products.push({
    ...product,
    id: Date.now().toString()
  });
  inventoryRef.value?.refreshProducts();
};
</script>