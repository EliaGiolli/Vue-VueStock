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

const inventoryRef = ref(null);

const handleAddProduct = async (product) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
    });
    
    if (!response.ok) throw new Error('Errore nell\'aggiunta del prodotto');
    
    // Refresh the inventory list
    inventoryRef.value?.refreshProducts();
    
    // Clear the form (you can add this to InputForm)
    // formRef.value?.resetForm();
    
  } catch (error) {
    console.error('Error adding product:', error);
  }
};
</script>