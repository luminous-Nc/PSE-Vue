<template>
    <main class="overflow-y-auto h-screen bg-gray-300">
        <questionnaire @close-quiz-window="closeWindow"v-if="needStyleQuiz"></questionnaire>
        <left-right-window v-else></left-right-window>
    </main>
</template>
<script setup>

import {onMounted, reactive, ref} from 'vue';
import questionnaire from '@/components/Questionnaire/index.vue'
import leftRightWindow from '@/components/LearningEnvironment/index.vue'
import {useStudentStore} from "@/stores/student.js";


let needStyleQuiz = ref(false)
const studentStore = useStudentStore()

onMounted(()=> {
    console.log('learning style:', studentStore.learningStyle)
    if (studentStore.learningStyle==='null') {
        needStyleQuiz.value = true
    }
})

const closeWindow = ()=> {
    needStyleQuiz.value = false
}

</script>
<style scoped>

</style>
