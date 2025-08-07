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
import { products as productsArray } from '@/mock/products.js'; // <-- NEW: import local array

const products = ref([]);
const loading = ref(false);
const error = ref('');

const fetchProducts = () => {
  loading.value = true;
  error.value = '';
  // Simulate async fetch
  setTimeout(() => {
    products.value = productsArray.slice();
    loading.value = false;
  }, 200);
};

const deleteProduct = (id) => {
  const idx = productsArray.findIndex(p => p.id === id);
  if (idx !== -1) productsArray.splice(idx, 1);
  fetchProducts();
};

const refreshProducts = () => {
  fetchProducts();
};

defineExpose({ refreshProducts });

onMounted(fetchProducts);
</script>
