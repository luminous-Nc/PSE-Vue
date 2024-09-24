<template>
    <div class="flex justify-between h-full pt-16 px-2 pb-2 space-x-2">
        <TopicLeft></TopicLeft>
        <TopicRight ></TopicRight>
    </div>
</template>

<script setup>
import TopicLeft from "@/components/Topic/TopicLeft.vue";
import TopicRight from "@/components/Topic/TopicRight.vue";

import { computed, onMounted } from 'vue';
import { useStudentStore } from '@/stores/student.js';
const studentStore = useStudentStore()


</script>

<style>

</style>
