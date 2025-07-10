<template>
  <section class="w-full md:max-w-4xl mx-auto p-4" aria-labelledby="inventario-prodotti">
    <h2 class="text-2xl font-bold mb-4 text-center">Inventario Prodotti</h2>
    
    <div v-if="loading" class="text-center">
      <p>Caricamento...</p>
      <Icon icon="lucide:loader-circle" width="24" height="24" class="animate-spin" />
    </div>
    
    <div v-else-if="error" class="text-center text-red-600">
      <p>{{ error }}</p>
      <Icon icon="lucide:alert-circle" width="24" height="24" />
    </div>
    
    <div v-else-if="products.length === 0" class="text-center text-gray-500">
      <p>Nessun prodotto nell'inventario</p>
      <Icon icon="lucide:box" width="24" height="24" />
    </div>
    
   <motion.div 
    v-else class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <motion.div
        v-for="product in products" 
        :key="product.id"
        class="bg-white p-4 rounded-lg shadow-md border border-gray-200"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.4, ease: 'easeOut' }"
      >
        <h3 class="font-semibold text-lg">{{ product.name }}</h3>
        <p class="text-gray-600">Quantità: {{ product.quantity }}</p>
        <p class="text-emerald-600 font-bold">€{{ product.price }}</p>
        <Button 
          variant="" 
          aria-label="bottone per eliminare i prodotti"
          size="sm" 
          @click="deleteProduct(product.id)"
          class="mt-2 flex gap-2"
        >
          <Icon icon="lucide:mouse-pointer-click" width="20" height="20" />
          <span>Elimina</span>
        </Button>
      </motion.div>
    </motion.div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import { motion } from 'motion-v';
import Button from './Button.vue';

const products = ref([]);
const loading = ref(true);
const error = ref('');

const fetchProducts = async () => {
  try {
    loading.value = true;
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
    if (!response.ok) throw new Error('Errore nel caricamento');
    const data = await response.json();
    // Map _id to id for frontend consistency(Mongoose espexts _id)
    products.value = data.map(p => ({
      ...p,
      id: p._id
    }));
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`, {
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
