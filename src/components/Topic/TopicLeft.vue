<template>
  <div
    class="flex flex-col justify-between w-1/3 p-6 bg-white border border-gray-300 rounded-lg shadow"
  >
    <!--        <h3 class="flex-shrink-0 basis-1/12 mb-2  text-3xl font-bold tracking-tight text-gray-900">-->
    <!--            {{ studentStore.getCurrentTopic?.name }}</h3>-->
    <div
      class="flex-shrink-0 basis-1/3 overflow-y-auto text-lg flex-col flex w-full"
    >
      <div
        v-for="id in studentStore.learningPath"
        :key="id"
        class=""
        :class="{
          'text-black': id < studentStore.currentStep?.id,
          'text-blue-500 font-bold': id === studentStore.currentStep?.id,
          'text-gray-500': id > studentStore.currentStep?.id,
        }"
        :ref="(el) => stepRefs.set(id, el)"
      >
        <h3 class="text-xl">
          {{ stepStore.getStepById(id)?.menu_text }}
        </h3>
      </div>
    </div>
    <h3 class="flex-shrink-0 basis-1/5 mb-2 text-2xl text-gray-900 mt-3">
      {{ studentStore.getCurrentStep?.text }}
    </h3>
    <h3 class="flex-grow mb-2 text-2xl text-gray-900 mt-3">
      {{ studentStore.responseMessage }}
    </h3>
    <div class="justify-center flex mb-3 flex-shrink-0 basis-1/12 text-2xl">
      <button
        v-show="
          studentStore.currentStepFinished &&
          studentStore.currentStep.type !== 'finish'
        "
        @click="nextButton"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Continue
      </button>

      <button
        v-show="studentStore.currentStep?.type === 'finish'"
        @click="resetLearning"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Restart
      </button>

      <button
        v-if="isDevelopment"
        @click="nextButton"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Continue Debug
      </button>
    </div>
  </div>
</template>

<script setup>
import { useTopicsStore } from "@/stores/topic.js";
import { useStepsStore } from "@/stores/step.js";
import { useStudentStore } from "@/stores/student.js";

import { storeToRefs } from "pinia";
import { watch } from "vue";

import { Add_Log } from "../../../public/assets/record/Log";

const stepStore = useStepsStore();
const studentStore = useStudentStore();

function nextButton() {
  studentStore.continue();

  // collect time ticker
  Add_Log("Click", "Continue Button");
}

function resetLearning() {
  studentStore.resetLearning();
}

// 获取环境变量
const isDevelopment = import.meta.env.DEV;

const stepRefs = new Map(); // 用来存储每个step的ref
watch(
  () => studentStore.currentStep,
  (newStep) => {
    if (newStep && stepRefs.has(newStep.id)) {
      const stepElement = stepRefs.get(newStep.id);
      stepElement.scrollIntoView({
        behavior: "smooth", // 平滑滚动
        block: "start", // 对齐到父容器的顶部
      });
    }
  }
);
</script>

<style scoped></style>
