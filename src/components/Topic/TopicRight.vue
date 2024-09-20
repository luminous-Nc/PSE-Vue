<script setup>
import { computed } from 'vue';
import PSECanvas from "@/components/PSECanvas/index.vue"
import {useQuestionsStore} from "@/stores/step.js";

const questionStore = useQuestionsStore();
const currentQuestion = computed(()=>questionStore.currentQuestion);
</script>

<template>
    <div class= "flex items-center justify-center 
                 overflow-clip block w-2/3 
                 bg-white border border-gray-300 rounded-lg shadow-2xl  
                 dark:bg-gray-800 dark:border-gray-700 
                 relative">
        <PSECanvas/>
    </div>
</template>

<style scoped>

</style>