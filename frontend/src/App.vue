<template>
  <Navbar />
  <main class="bg-white ">
    <InputForm @addProduct="addToInventory" />
      <div class="flex flex-col justify-center items-center text-center gap-4 bg-white text-gray-900 w-full md:max-w-2xl min-h-[500px] text-center shadow-lg shadow-grey-900 rounded-lg p-8 my-20 mx-auto">
        <h2 class="text-2xl md:text-3xl text-slate-900 font-bold p-2">Il tuo inventario</h2>
        <div v-for="(item, id) in inventory" :key="id" class="bg-white p-4 flex flex-col justify-around h-full">
          <p class="text-lg p-2">{{ item.name }}</p>
          <p class="text-lg p-2">Prezzo: €{{ item.price }}</p>
          <p class="text-lg p-2">Quantità: {{ item.quantity }}</p>
          <button
          class="bg-emerald-500 hover:bg-emerald-600 text-white text-lg rounded-lg shadow-lg shadow-grey-900 p-4 my-5"
          @click="deleteItem(id)"    
          >
            Elimina
          </button>
        </div>
      </div>
  </main>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './Layouts/Navbar.vue';
import InputForm from './Layouts/InputForm.vue';
import Footer from './Layouts/Footer.vue';

const inventory = ref([]);

//fetch inventory from the backend
async function fetchInventory() {
  const response = await fetch('http://localhost:3000/api/inventory');
  inventory.value = await response.json();
}

onMounted(fetchInventory);

async function addToInventory(productlist) {
  const res = await fetch('http://localhost:3000/api/inventory', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(productlist)
  });
  if(res.ok) {
    const newProduct = await res.json();
    inventory.value.push(newProduct);
  }
}

async function deleteItem(index){
  const product = inventory.value[index];
  await fetch(`http://localhost:3000/api/inventory/${product.id}`, {
    method: 'DELETE'
  });
  inventory.value.splice(index,1);
}

</script>
