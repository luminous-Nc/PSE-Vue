<template>
 <questionnaire v-if="showQuestionnaire"></questionnaire>
 <div class="flex justify-between h-screen space-x-2 px-2 pt-20 pb-2">
 <TopicLeft></TopicLeft>
 <TopicRight ></TopicRight>
 </div>
</template>

<script setup>
import TopicLeft from "@/components/Topic/TopicLeft.vue";
import TopicRight from "@/components/Topic/TopicRight.vue";
import Questionnaire from "@/components/Questionnaire/index.vue";
import { computed, onMounted } from 'vue';
import { useStudentStore } from '@/stores/student.js';


const showQuestionnaire = computed(() => {
 return studentStore.learningStyle !== 'null';
});

const studentStore = useStudentStore()
onMounted(() => {

 studentStore.initStudent(); //
});

</script>

<style>

</style>
