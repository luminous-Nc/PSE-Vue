<template>
    <Suspense>
        <div class="flex w-full justify-between space-x-4">
            <!-- Step Buttons -->
            <div
                    v-for="(moduleName, moduleIndex) in moduleArray"
                    :key="moduleIndex"
                    class="flex flex-col items-center"
            >
                <div :class="['px-4 py-2 text-center border rounded',
                moduleCSS(moduleIndex)]"
                >
                    {{ moduleName }}
                </div>
<!--                <div class="flex flex-row justify-between space-x-2">-->
<!--                    <div v-for="(stepNumber,stepIndex) in stepArray[moduleIndex]"-->
<!--                         :class="[-->
<!--        'mt-2 w-6 h-6 flex items-center justify-center rounded-full border text-black',-->
<!--        stepCSS(moduleIndex, stepIndex)]"-->
<!--                    >-->
<!--                        {{ stepIndex + 1 }}-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>
    </Suspense>
</template>

<script setup>

import {onMounted, ref} from 'vue';
import {useCaseStore} from "@/stores/caseStudy.js";
import {useRoute} from "vue-router";

const route = useRoute()
const caseStudyID = route.params.caseStudyName

const caseStudyStore = useCaseStore()
caseStudyStore.loadCaseStudy(caseStudyID);


const currentStep = ref(1);

const moduleArray = ref([])
const stepArray = ref([])

const fetchCaseMenu = async () => {
    await caseStudyStore.loadCaseStudy(caseStudyID);
    moduleArray.value = caseStudyStore.module_array; // 将 module_arrays 的值附上
    stepArray.value = caseStudyStore.step_array; // 将 step_array 的值附上
};

onMounted(async () => {
    await fetchCaseMenu();
})


const isCompleted = (index) => index < currentStep.value;

const moduleCSS = (moduleIndex) => {
    if (moduleIndex < caseStudyStore.current_module)  { // Past
        return 'bg-green-200 opacity-50'
    } else if (moduleIndex === caseStudyStore.current_module) { // Current
        return 'bg-green-500 font-bold'
    } else {
        return 'bg-white border-0 text-white'
    }
}

const stepCSS = (moduleIndex, stepIndex) => {
    if (moduleIndex !== caseStudyStore.current_module) {
        return 'bg-white border-white text-white'
    } else if (caseStudyStore.step_array[moduleIndex].length <= 1) {
        return 'bg-white border-white text-white'
    } else {
        if (stepIndex < caseStudyStore.current_step) {
            return 'bg-yellow-300 border-yellow-500'
        } else if (stepIndex == caseStudyStore.current_step) {
            return 'bg-yellow-500 font-bold border-yellow-600'
        } else {
            return 'bg-white border-white text-white'
        }
    }
}


</script>

<style>
/* Add optional custom styles if needed */
</style>
