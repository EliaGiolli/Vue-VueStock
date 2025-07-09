<template>
    <section class="bg-white flex md:justify-center text-center md:text-xl p-6">
        <TabView>
            <TabPanel header="Prodotti">
                <p class="m-0">
                    Gestione semplice e intuitiva del magazzino. Aggiungi, visualizza ed elimina i prodotti disponibili.
                </p>
            </TabPanel>
            <TabPanel header="Statistiche">
                <p class="m-0">
                    Visualizza le performance del tuo magazzino, quantità in stock, prodotti più venduti e molto altro.
                </p>
            </TabPanel>
            <TabPanel header="FAQ">
                <p class="m-0">
                    Trova risposte alle domande più frequenti su come utilizzare VueStock al meglio.
                </p>
            </TabPanel>
        </TabView>
    </section>
</template>

<script setup>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
</script>
