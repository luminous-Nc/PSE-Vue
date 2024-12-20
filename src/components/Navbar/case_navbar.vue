<template>
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-lg">
        <div class="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
            <!-- Left Logo and Title -->
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/assets/TAMU-Logo.svg" class="h-8" alt="TAMU Logo"/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Case Study</span>
            </div>

            <!-- Right Image -->
            <div class="flex items-center">
                <img src="/assets/NSF.jpg" class="h-8 w-8 rounded-full" alt="Profile Image"/>
            </div>
        </div>
    </nav>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {computed} from "vue";
import {useStudentStore} from "@/stores/student.js";
const route = useRoute();
const router = useRouter();


const isActive = (path) => {
    return route.path === path;
};

const showQuestionnaire = computed(() => {
  if (studentStore.learningStyle === 'null' || studentStore.learningStyle === null) {
    return true
  } else {
    return false
  }
});

const studentStore = useStudentStore()

</script>

<style scoped>

</style>
