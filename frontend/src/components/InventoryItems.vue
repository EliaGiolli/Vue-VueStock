<template>
  <div class="w-full md:max-w-4xl mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4 text-center">Inventario Prodotti</h2>
    
    <div v-if="loading" class="text-center">
      <p>Caricamento...</p>
    </div>
    
    <div v-else-if="error" class="text-center text-red-600">
      <p>{{ error }}</p>
    </div>
    
    <div v-else-if="products.length === 0" class="text-center text-gray-500">
      <p>Nessun prodotto nell'inventario</p>
    </div>
    
    <div v-else class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div 
        v-for="product in products" 
        :key="product.id"
        class="bg-white p-4 rounded-lg shadow-md border border-gray-200"
      >
        <h3 class="font-semibold text-lg">{{ product.name }}</h3>
        <p class="text-gray-600">Quantità: {{ product.quantity }}</p>
        <p class="text-emerald-600 font-bold">€{{ product.price }}</p>
        <Button 
          variant="navbar" 
          size="sm" 
          @click="deleteProduct(product.id)"
          class="mt-2"
        >
          Elimina
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Button from './Button.vue';

const products = ref([]);
const loading = ref(true);
const error = ref('');

const fetchProducts = async () => {
  try {
    loading.value = true;
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
    if (!response.ok) throw new Error('Errore nel caricamento');
    products.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/inventory/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Errore nell\'eliminazione');
    await fetchProducts(); // Refresh the list
  } catch (err) {
    error.value = err.message;
  }
};

// Listen for custom event to refresh products
const refreshProducts = () => {
  fetchProducts();
};

//In Vue 3, by default, child components don't expose their methods to parent components
// Expose method for parent to call
defineExpose({ refreshProducts });

onMounted(fetchProducts);
</script>
