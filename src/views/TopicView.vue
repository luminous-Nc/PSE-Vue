<template>
 <div class="flex justify-between h-screen space-x-2 px-2 pt-20 pb-2">
 <TopicLeft></TopicLeft>
 <TopicRight></TopicRight>
 </div>
</template>

<script setup>
import TopicLeft from "@/components/Topic/TopicLeft.vue";
import TopicRight from "@/components/Topic/TopicRight.vue";
import { onMounted } from 'vue';
import { usePhaseStore } from '@/stores/phase.js';
import {useQuestionsStore} from "@/stores/question.js";


const phaseStore = usePhaseStore();
const questionStore = useQuestionsStore();

onMounted(() => {
 phaseStore.initPhase();
 questionStore.initQuestion()
});
</script>

<style>

</style>