<template>
    <navbar></navbar>
    <RouterView v-if="isRouterAlive"/>

</template>

<script setup>
import {RouterView} from 'vue-router';
import Navbar from '@/components/Navbar/index.vue'
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
