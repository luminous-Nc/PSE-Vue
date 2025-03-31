<template>
    <main class="overflow-y-auto h-screen bg-gray-300">
        <!-- <questionnaire @close-quiz-window="closeWindow" v-if="needStyleQuiz"></questionnaire> -->
        <left-right-window></left-right-window>
    </main>
</template>
<script setup>

import {computed, onMounted, reactive, ref, watch} from 'vue';
import questionnaire from '@/components/Questionnaire/index.vue'
import leftRightWindow from '@/components/LearningEnvironment/index.vue'
import {useStudentStore} from "@/stores/student.js";
import {useRoute} from 'vue-router';

let needStyleQuiz = ref(false)
const studentStore = useStudentStore()
const route = useRoute();

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
  // 检查URL参数中是否有style参数
  const styleParam = route.query.style;
  
  if (styleParam) {
    // 根据URL参数设置学习风格
    let learningStyle = '';
    if (styleParam.toLowerCase() === 'g') {
      learningStyle = 'Global';
    } else if (styleParam.toLowerCase() === 's') {
      learningStyle = 'Sequential';
    }
    
    if (learningStyle) {
      // 设置学习风格并初始化学习路径
      studentStore.setLearningStyle(learningStyle);
      studentStore.initLearningPath();
      needStyleQuiz.value = false;
      return;
    }
  }
  
  // 如果没有有效的URL参数，则检查是否已有学习风格
  if (studentStore.learningStyle === '' || studentStore.learningStyle === null || studentStore.learningStyle === 'null') {
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
