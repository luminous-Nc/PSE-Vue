<template>
    <universal-navbar app-name="plcInterfacing"></universal-navbar>
    <RouterView v-if="isRouterAlive"/>

</template>

<script setup>
import {RouterView} from 'vue-router';
import UniversalNavbar from '@/components/Navbar/universal_navbar.vue'

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
