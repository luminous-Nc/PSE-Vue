<template>
    <div>
        <div v-show="!ifFirstStep"class="absolute left-10 bottom-10 m-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center group hover:bg-green-600" @click="lastButton">
            <div class="w-0 h-0 border-t-[24px] border-r-[36px] border-b-[24px] transform -translate-x-1 border-transparent border-r-black group-hover:border-r-white"></div>
        </div>

        <div v-show="!ifLastStep" class="absolute right-10 bottom-10 m-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center group hover:bg-green-600" @click="nextButton">
            <div class="w-0 h-0 border-t-[24px] border-l-[36px] border-b-[24px] transform translate-x-1 border-transparent border-l-black transform group-hover:border-l-white"></div>
        </div>
    </div>
</template>

<script setup>

import {useCaseStore} from "@/stores/caseStudy.js";
import {computed} from "vue";

const caseStudyStore = useCaseStore()


function nextButton() {
    caseStudyStore.nextStep();
}

function lastButton() {
    caseStudyStore.lastStep();
}

const moduleArray = computed(() => caseStudyStore.module_array);
const stepArray = computed(() => caseStudyStore.step_array);
const currentModule = computed(()=> caseStudyStore.current_module)
const currentStep = computed(() => caseStudyStore.current_step)

const ifFirstStep = computed(() => {
    return currentModule.value === 0 && currentStep.value === 0;
});

const ifLastStep = computed(() => {
    // 判断当前模块和步骤是否为最后一个
    const isLastModule = currentModule.value === moduleArray.value.length - 1;
    const isLastStepInModule =
        stepArray.value[currentModule.value]?.length &&
        currentStep.value === stepArray.value[currentModule.value].length - 1;

    return isLastModule && isLastStepInModule;
});


</script>

<style scoped>

</style>