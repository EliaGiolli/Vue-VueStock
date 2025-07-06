<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />
    
    <main class="container mx-auto py-8">
      <section class="flex flex-col items-center justify-center border-l-4 border-l-emerald-500 p-4 my-10 mx-auto">
        <h1 class="text-emerald-800 text-left text-2xl font-bold">VueStock - Gestione del magazzino virtuale</h1>
        <p class="text-left">VueStock è un'applicazione web che permette di gestire un magazzino virtuale.
          <br>
          Inserisci i prodotti nel magazzino e visualizza l'inventario.
        </p>
      </section>
      <InputForm @addProduct="handleAddProduct" />
      <InventoryItems ref="inventoryRef" />
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import InputForm from './components/InputForm.vue';
import InventoryItems from './components/InventoryItems.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';

const inventoryRef = ref(null);

const handleAddProduct = async (product) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/inventory`, {
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
