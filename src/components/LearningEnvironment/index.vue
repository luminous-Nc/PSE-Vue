<template>
    <div class="flex justify-between h-full pt-16 px-2 pb-2 space-x-2">
        <TopicLeft></TopicLeft>
        <TopicRight></TopicRight>
    </div>
</template>

<script setup>
import TopicLeft from "@/components/Topic/TopicLeft.vue";
import TopicRight from "@/components/Topic/TopicRight.vue";

import {computed, onMounted, watch} from 'vue';
import {useStudentStore} from '@/stores/student.js';
import {Next_Step_Stop_Audio} from "../../../public/assets/canvas/Canvas_Description.js";
import {Init_Canvas} from "../../../public/assets/canvas/Canvas_Page.js";


const studentStore = useStudentStore()
const currentLearningStyle = computed(() => studentStore.learningStyle)

watch(currentLearningStyle, (newStyle, oldStyle) => {
    if (newStyle) {
        studentStore.initLearningPath()
    }
})

</script>

<style>

</style>
