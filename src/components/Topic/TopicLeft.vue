<template>

    <div class="flex flex-col justify-between w-1/3 p-6 bg-white border border-gray-300 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <h3 class="flex-shrink-0 basis-1/12 mb-2  text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ topicStore.getCurrentTopic?.name }}</h3>
        <div class="flex-shrink-0 overflow-y-scroll basis-1/6 text-lg flex-col flex w-full pl-4">
          <div v-for="id in studentStore.learningPath" :key="id" class=""
               :class="{
            'text-black': id < studentStore.currentStep?.id,
            'text-blue-500 font-bold': id === studentStore.currentStep?.id,
            'text-gray-500': id > studentStore.currentStep?.id
        }">
            <h3 class="text-xl">
              {{ stepStore.getStepById(id)?.menu_text }}
            </h3>
          </div>
        </div>
        <h3 class=" flex-shrink-0 basis-1/5 mb-2 text-2xl text-gray-900 dark:text-white mt-3">
            {{ stepStore.getCurrentStep?.text}}</h3>
        <h3 class="flex-grow mb-2 text-2xl text-gray-900 dark:text-white mt-3">
        {{studentStore.responseMessage}}</h3>
        <div class="justify-center flex mb-3 flex-shrink-0 basis-1/12 text-2xl">
              <button v-show="studentStore.currentStepFinished && studentStore.currentStep.type!=='finished'" @click="nextButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Next
              </button>
          </div>
    </div>

</template>

<script setup>
import {useTopicsStore} from "@/stores/topic.js";
import {useStepsStore} from "@/stores/step.js";
import {useStudentStore} from "@/stores/student.js";

import { storeToRefs } from 'pinia'

const topicStore = useTopicsStore();
const stepStore = useStepsStore();
const studentStore = useStudentStore();



function nextButton() {
    studentStore.nextStep()
}
</script>


<style scoped>

</style>
