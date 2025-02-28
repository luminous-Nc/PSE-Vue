<template>
    <nav class="bg-white fixed w-full z-20 top-0 start-0 shadow-lg">
        <div class="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
            <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/assets/TAMU-Logo.svg" class="h-8" alt=""/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap">
                    {{ isDebugRoute ? "ASI Tutor Debug" : "ASI Tutor" }}
                </span> </router-link>

            <div v-if="!isDebugRoute" class="block w-auto" id="navbar-default">
                <ul
                     class="font-medium flex p-0 border-gray-100 rounded-lg  flex-row space-x-8 rtl:space-x-reverse mt-0 border-0 bg-white">
                    <li>
                        <router-link to="/"
                           :class="{'text-blue-700': isActive('/'), 'text-gray-900': !isActive('/')}"
                              class="block py-2 px-3 rounded border-0 hover:text-blue-700 p-0">Learn</router-link>
                    </li>
                    <li>
                        <router-link to="/learningStyle"
                           :class="{'text-blue-700': isActive('/learningStyle'), 'text-gray-900': !isActive('/learningStyle')}"
                                     class="block py-2 px-3 rounded  border-0 hover:text-blue-700 p-0">My Learning Style</router-link>
                    </li>
                </ul>
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

// 判断当前是否在debug路由
const isDebugRoute = computed(() => {
    return route.path === '/debug';
});

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
