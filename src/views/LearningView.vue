<template>
    <main class="overflow-y-auto h-screen bg-gray-300">
        <questionnaire @close-quiz-window="closeWindow" v-if="needStyleQuiz"></questionnaire>
        <left-right-window v-else></left-right-window>
    </main>
</template>
<script setup>

import {computed, onMounted, reactive, ref, watch} from 'vue';
import questionnaire from '@/components/Questionnaire/index.vue'
import leftRightWindow from '@/components/LearningEnvironment/index.vue'
import {useStudentStore} from "@/stores/student.js";


let needStyleQuiz = ref(false)
const studentStore = useStudentStore()

const currentLearningStyle = computed(() => studentStore.learningStyle)

watch(currentLearningStyle,(newLearningStyle)=> {
  console.log(newLearningStyle)
  if (newLearningStyle=== '' || newLearningStyle === null || newLearningStyle === 'null') {
    needStyleQuiz.value = true
  } else {
    needStyleQuiz.value = false
  }
})

onMounted(()=> {
  if (studentStore.learningStyle=== '' || studentStore.learningStyle === null || studentStore.learningStyle === 'null') {
    needStyleQuiz.value = true
  } else {
    needStyleQuiz.value = false
  }
})

const closeWindow = ()=> {
    needStyleQuiz.value = false
}

</script>
<style scoped>

</style>
