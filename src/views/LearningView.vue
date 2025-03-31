<template>
  <main class="overflow-y-auto h-screen bg-gray-300">
    <left-right-window></left-right-window>
  </main>
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import leftRightWindow from "@/components/LearningEnvironment/index.vue";
import { useStudentStore } from "@/stores/student.js";
import { useRoute } from "vue-router";

const studentStore = useStudentStore();
const route = useRoute();
let previousPath = ""; // 用于记录上一次的路径

// 监听路由路径的变化
watch(
  () => route.path,
  (newPath) => {
    console.log("Current path:", newPath);
    let learningStyle = "";

    // 检查是否是学习风格切换（global 和 sequential 之间的切换）
    if (
      (previousPath === "/global" && newPath === "/sequential") ||
      (previousPath === "/sequential" && newPath === "/global")
    ) {
      console.log("Learning style changed, resetting...");
      studentStore.resetLearning();
    }

    if (newPath === "/sequential" || newPath === "/") {
      learningStyle = "Sequential";
    } else if (newPath === "/global") {
      learningStyle = "Global";
    }

    if (learningStyle) {
      studentStore.setLearningStyle(learningStyle);
      studentStore.initLearningPath();
    }

    // 更新上一次的路径
    previousPath = newPath;
  },
  { immediate: true }
);
</script>
<style scoped></style>
