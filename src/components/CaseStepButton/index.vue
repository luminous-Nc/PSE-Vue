<template>
    <div>
        <div v-show="!ifFirstStep"class="absolute left-10 bottom-10 m-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center group hover:bg-green-600" @click="lastButton">
            <div class="w-0 h-0 border-t-[24px] border-r-[36px] border-b-[24px] transform -translate-x-1 border-transparent border-r-black group-hover:border-r-white"></div>
        </div>

        <div v-show="showNextStep" class="absolute right-10 bottom-10 m-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center group hover:bg-green-600" @click="nextButton">
            <div class="w-0 h-0 border-t-[24px] border-l-[36px] border-b-[24px] transform translate-x-1 border-transparent border-l-black transform group-hover:border-l-white"></div>
        </div>

        <div v-show="showFunctionButton" class="absolute right-10 bottom-10 m-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center group hover:bg-green-600" @click="functionButton">
          {{ caseStudyStore.function_key_name }}
        </div>

      <div v-show="showResetButton" class="absolute right-10 bottom-32 m-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center group hover:bg-green-600" @click="resetButton">
        reset
      </div>

        <div v-show="showReplayButton" class="absolute right-10 bottom-32 m-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center group hover:bg-green-600" @click="replayButton">
           replay
        </div>

      <div v-show="showWireSteps" class="absolute right-10 bottom-0 rounded-full m-4 w-20 h-5 flex items-center justify-center group hover:text-green-700" @click="nextButton">
        skip
      </div>

        <div v-show="showWireSteps" class="absolute right-16 pr-2 bottom-9">{{caseStudyStore.current_wire}} / {{caseStudyStore.total_wire}}</div>
    </div>
</template>

<script setup>

import {useCaseStore} from "@/stores/caseStudy.js";
import {computed} from "vue";
import {nextWireDemo, replayWireDemo, startWireDemo} from "../../../public/assets/canvas/Canvas_Test.js";
import {Init_Analysis} from "../../../public/assets/test/Analysis.js";
import {useStudentStore} from "@/stores/student.js";
import {Add_Log} from "../../../public/assets/record/Log.js";
import {Init_Practice} from "../../../public/assets/test/Connection.js";

const caseStudyStore = useCaseStore()


function nextButton() {
    caseStudyStore.nextStep();
}

function lastButton() {
    caseStudyStore.lastStep();
}

function resetButton() {
  Init_Practice()
}

function functionButton() {
  if (caseStudyStore.function_key_name === 'start') {
    startWireDemo()
  } else if (caseStudyStore.function_key_name === 'next') {
    nextWireDemo()
  } else if (caseStudyStore.function_key_name === 'submit') {
    let MyAnalysis = Init_Analysis();
    caseStudyStore.show_function_button = false
    caseStudyStore.allow_next_step = true
  }
}

function replayButton(){
    replayWireDemo()
}

const moduleArray = computed(() => caseStudyStore.module_array);
const stepArray = computed(() => caseStudyStore.step_array);
const currentModuleIndex = computed(()=> caseStudyStore.current_module)
const currentStepIndex = computed(() => caseStudyStore.current_step)

const currentStep = computed(() => {
    if (caseStudyStore.step_array[caseStudyStore.current_module]?.length > 0) {
        return caseStudyStore.step_array[caseStudyStore.current_module][caseStudyStore.current_step]
    } else {
        return {title: '', id: null}
    }

});

const currentKeyName = computed(()=>caseStudyStore.function_key_name)

const ifFirstStep = computed(() => {
    return currentModuleIndex.value === 0 && currentStepIndex.value === 0;
});

const ifLastStep = computed(() => {
    // 判断当前模块和步骤是否为最后一个
    const isLastModule = currentModuleIndex.value === moduleArray.value.length - 1;
    const isLastStepInModule =
        stepArray.value[currentModuleIndex.value]?.length &&
        currentStepIndex.value === stepArray.value[currentModuleIndex.value].length - 1;

    return isLastModule && isLastStepInModule;
});

const showNextStep = computed(()=> {
    return (!ifLastStep.value && caseStudyStore.allow_next_step)
})

const showWireSteps = computed(()=>{
    if (currentStep.value.type === "schematic") {
        if (caseStudyStore.function_key_name !== "start") {
            return true
        }
    }
    return false
})

const showReplayButton = computed(()=>{
    if(currentStep.value.type==="schematic") {
        if (caseStudyStore.function_key_name !== "start" && caseStudyStore.current_wire!==0) {
            return true
        }
    }
})

const showResetButton = computed(()=>{
  if(currentStep.value.type==="practice") {
    return true
  }
})

const showFunctionButton = computed(()=> {
    return caseStudyStore.show_function_button
})



</script>

<style scoped>

</style>
