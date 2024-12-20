<template>
    <case-navbar></case-navbar>
    <RouterView v-if="isRouterAlive"/>

</template>

<script setup>
import {RouterView} from 'vue-router';
import CaseNavbar from '@/components/Navbar/case_navbar.vue'
import caseStepBar from "@/components/CaseStepBar/index.vue";
import { ref, nextTick, provide } from "vue";
const isRouterAlive = ref(true);
const reload = () => {
    isRouterAlive.value = false;
    nextTick(() => {
        isRouterAlive.value = true;
    });
};
provide("reload", reload);

</script>

<style scoped>

</style>
