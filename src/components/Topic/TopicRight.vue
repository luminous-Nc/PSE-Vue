<script setup>
import { computed } from 'vue';
import PSECanvas from "@/components/PSECanvas/index.vue"
import {useQuestionsStore} from "@/stores/question.js";

const questionStore = useQuestionsStore();
const currentQuestion = computed(()=>questionStore.currentQuestion);
</script>

<template>
    <div class="overflow-clip block w-2/3 bg-white border border-gray-300 rounded-lg shadow-2xl  dark:bg-gray-800 dark:border-gray-700">
        <PSECanvas :points="currentQuestion.points" />
    </div>
</template>

<style scoped>

</style>