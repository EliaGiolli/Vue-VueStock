<template>
    <Herosection />
    <section class="my-20">
        <Reviews />
    </section>
    <motion.section 
        class="bg-white text-center rounded-lg shadow-lg w-1/2 mx-auto p-8 mb-20"
        :initial="{ opacity: 0, x: 100 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
        >
        <h2 class="text-emerald-600 font-bold text-2xl md:text-3xl">Hai bisogno di un'applicazione che gestisca il tuo inventario online?</h2>
        <p class="mt-4 text-lg md:text-xl">Non hai bisogno di cercare altrove. Prova VueStock e non rimarrai deluso!</p>
        <RouterLink to="/products">
        <Button
            variant=""
            size="lg" 
            aria-label="Vai alla pagina dei prodotti" 
            class="mt-6 flex gap-2 mx-auto"
        >
            <Icon icon="lucide:mouse-pointer-click" width="24" height="24" />
            <span>Scopri il nostro prodotto</span>
        </Button>
     </RouterLink>
    </motion.section>
</template>

<script setup>
import Herosection from '@/components/Herosection.vue';
import Reviews from '@/components/Reviews.vue';
import Button from '@/components/Button.vue';
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';
import { motion } from 'motion-v';
</script>