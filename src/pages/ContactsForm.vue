<template>

    <Form action="POST" 
        class="bg-white text-gray-900 w-full md:max-w-2xl h-fit flex flex-col justify-center items-center text-center gap-4 
        shadow-lg shadow-grey-900 rounded-lg p-8 my-10 mx-auto"
        @submit="handleSubmit"
    >
    <div class="flex gap-4 md:flex-col items-center text-center">
        <label for="product-name" class="text-xl md:text-2xl text-gray-900">Nome utente</label>
        <Field 
            type="text" 
            name="name" 
            placeholder="Es. Mario Rossi"
            :rules="validateUsername"
            class="hover:bg-gray-100 border-2 px-2 border-gray-900 rounded-md focus:outline-emerald-500"
            v-model="userCredentials.name"
            />
    </div>

    <ErrorMessage name="name" class="bg-lime-100 text-gray-800 px-4 py-3 rounded-md"/>
    
    <div class="flex gap-4 md:flex-col items-center text-center my-4">
        <label for="product-quantity" class="text-xl md:text-2xl text-gray-900">Email</label>
        <Field 
            type="email" 
            name="email"
            placeholder="es. mariorossi90@gmail.com"
            :rules="validateEmail" 
            class="hover:bg-gray-100 border-2 min-w-[250px] px-2 border-gray-900 rounded-md focus:outline-emerald-500"
            v-model="userCredentials.email"
            />
    </div>
    
    <ErrorMessage name="email" class="bg-lime-100 text-gray-800 px-4 py-3 rounded-md" />
    
    <div class="flex gap-4 flex-col items-center text-center my-5">
        <label for="user-message" class="text-xl md:text-2xl text-gray-900">Lascia un messaggio</label>
        <Field
            as="textarea"
            name="message"
            v-model="userCredentials.message"
            :rules="validateMessage"
            rows="5"
            cols="30"
            placeholder="Scrivi il tuo messaggio..."
            class="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-y bg-gray-50 text-gray-900"
        />
    </div>

    <ErrorMessage name="message" class="bg-lime-100 text-gray-800 px-4 py-3 rounded-md" />

    <Button 
        size="md"
        type="submit"
        :disabled="isLoading"
        >
        {{ isLoading ? 'invio in corso...' : 'Lascia un messaggio' }}
    </Button>

    <p v-if="successMessage" class="text-green-600 font-semibold">{{ successMessage }}</p>
    <p v-if="errorMessage" class="text-red-600 font-semibold">{{ errorMessage }}</p>


</Form>
</template>

<script setup>
import Button from '@/components/Button.vue';
import { reactive, ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';

const userCredentials = reactive({
    name: '',
    email: '',
    message: '',
});

const successMessage = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

const handleSubmit = async () => {
  successMessage.value = '';
  errorMessage.value = '';
  isLoading.value = true;

  // Simulate sending
  setTimeout(() => {
    successMessage.value = '✅ Messaggio inviato con successo!';
    userCredentials.name = '';
    userCredentials.email = '';
    userCredentials.message = '';
    isLoading.value = false;
    setTimeout(() => {
      successMessage.value = '';
    }, 3000);
  }, 800);
};

//Veevalidate functions
function validateEmail(value){
    if(!value) return 'Questo campo è vuoto';
    
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(!regex.test(value)) return 'La mail di questo campo deve essere valida';

    return true;
}

function validateUsername(value) {

    if(!value) return 'Il nome è obbligatorio';

    if(value.length < 2) return 'Inserisci almeno due lettere';

    //It controls that the field contains only letters and spaces
    const regexUserName = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    if(!regexUserName.test(value)) return 'inserisci solo lettere';

    return true;
}

function validateMessage(value){

    if(!value) return 'Il messaggio è obbligatorio';
    
    if(value.length < 10) return 'Il messaggio deve essere lungo almeno dieci lettere'

    const regexMessage = /^[a-zA-ZÀ-ÿ\s'-]+$/; 
    if(!regexMessage.test(value)) return 'inserisci solo lettere';

    return true;
}


</script>