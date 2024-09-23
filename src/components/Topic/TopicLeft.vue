<template>

    <div class="flex flex-col justify-between w-1/3 p-6 bg-white border border-gray-300 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <h3 class="mb-2  text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ topicStore.getCurrentTopic?.name }}</h3>
        <h3 class="mb-2 text-2xl text-gray-900 dark:text-white mt-3">
            {{stepStore.getCurrentStep?.number}}  {{ stepStore.getCurrentStep?.text}}</h3>
      <h3 class="mb-2 text-2xl text-gray-900 dark:text-white mt-3">
        {{studentStore.responseMessage}}</h3>
      <div class="mb-3 text-2xl">
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
