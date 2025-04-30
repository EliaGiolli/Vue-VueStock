<template>
  <Navbar />
  <main class="bg-white ">
    <InputForm @addProduct="addToInventory" />
      <div class="flex flex-col justify-center items-center text-center gap-4 bg-white text-gray-900 w-full md:max-w-2xl min-h-[500px] text-center shadow-lg shadow-grey-900 rounded-lg p-8 my-20 mx-auto">
        <h2 class="text-2xl md:text-3xl text-slate-900 font-bold p-2">Your inventory</h2>
        <div v-for="(item, id) in inventory" :key="id" class="bg-white p-4 flex flex-col justify-around h-full">
          <p class="text-lg p-2">{{ item.name }}</p>
          <p class="text-lg p-2">Prezzo: €{{ item.price }}</p>
          <p class="text-lg p-2">Quantità: {{ item.quantity }}</p>
          <button
          class="bg-emerald-500 hover:bg-emerald-600 text-white text-lg rounded-lg shadow-lg shadow-grey-900 p-4 my-5"
          @click="deleteItem(index)"    
          >
            Elimina
          </button>
        </div>
      </div>
  </main>
  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import Navbar from './Layouts/Navbar.vue';
import InputForm from './Layouts/InputForm.vue';
import Footer from './Layouts/Footer.vue';

const inventory = ref([]);

function addToInventory(productList) {
  
  inventory.value.push({
    id:Date.now(),
    ...productList});
}

function deleteItem(index){
  inventory.value.splice(index,1);
}

</script>
