<template>

    <div class="flex flex-col justify-between w-1/3 p-6 bg-white border border-gray-300 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <h3 class="mb-2  text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{{ currentTopic.name }}</h3>
        <h3 class="mb-2 text-4xl font-bold text-gray-900 dark:text-white mt-3">
            {{ currentPhase.text}}</h3>
        <p class="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">{{currentQuestion.points}}</p>
    </div>

</template>

<script setup>
import { computed } from 'vue';
import { usePhaseStore } from '@/stores/phase.js';
import {useTopicsStore} from "@/stores/topic.js";
import {useQuestionsStore} from "@/stores/question.js";

const topicStore = useTopicsStore();
const currentTopic = computed(()=> topicStore.currentTopic)

const phaseStore = usePhaseStore();
const currentPhase = computed(() => phaseStore.currentPhase);

const questionStore = useQuestionsStore();
const currentQuestion = computed(()=>questionStore.currentQuestion);
</script>


<style scoped>

</style>