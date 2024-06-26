<template>
    <navbar></navbar>
    <RouterView/>
</template>

<script setup>
import {onMounted} from 'vue';
import {useTopicsStore} from './stores/topic';
import {useQuestionsStore} from "@/stores/question.js";
import {RouterLink, RouterView} from 'vue-router';

import Navbar from '@/components/Navbar/index.vue'

const topicsStore = useTopicsStore();
const questionsStore = useQuestionsStore();

onMounted(async () => {
    await topicsStore.getAllTopics()
    await questionsStore.getAllQuestions()
});
</script>

<style scoped>

</style>
