<template>
<form action="GET" 
    class="bg-white text-gray-900 w-full md:max-w-2xl h-fit flex flex-col justify-center items-center text-center gap-4 
    shadow-lg shadow-grey-900 rounded-lg p-8 my-10 mx-auto"
    @submit.prevent="handleSubmit"
    >
    <div class="flex gap-4 md:flex-col items-center text-center">
        <label for="product-name" class="text-xl md:text-2xl text-gray-900">Nome prodotto</label>
        <input type="text" name="Nome prodotto" id="Product-name" 
            class="hover:bg-gray-100 border-2 border-gray-900 rounded-md focus:outline-emerald-500"
            v-model.lazy.trim="productList.name"
            >
    </div>
    <div class="flex gap-4 md:flex-col items-center text-center">
        <label for="product-quantity" class="text-xl md:text-2xl text-gray-900">Quantità</label>
        <input type="number" name="" id="product-quantity" 
            class="hover:bg-gray-100 border-2 border-gray-900 rounded-md focus:outline-emerald-500"
            v-model.lazy.number.trim="productList.quantity"
            >
    </div>
    <div class="flex gap-4 md:flex-col items-center text-center">
        <label for="product-price" class="text-xl md:text-2xl text-gray-900">Prezzo</label>
        <input type="number" name="" id="product-price" 
            class="hover:bg-gray-100 border-2 border-gray-900 rounded-md focus:outline-emerald-500"
            v-model.lazy.number.trim="productList.price"
            >
    </div>
    <Button 
        size="md"
        type="submit"
        class="flex gap-2">
        <Icon icon="lucide:mouse-pointer-click" width="24" height="24" />
        <span>Aggiungi un prodotto</span>
    </Button>

</form>


</template>

<script setup>
import { reactive } from 'vue';
import { Icon } from '@iconify/vue';
import Button from './Button.vue';

const emit = defineEmits(['addProduct'])


const productList = reactive({
    name: '',
    price: 0,
    quantity:0,
});

const handleSubmit = (e)=>{
    emit('addProduct', productList);
}
</script>