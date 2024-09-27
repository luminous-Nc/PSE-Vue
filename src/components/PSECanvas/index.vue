<template>
  <div class="w-full h-full">
    <div class="h-full flex justify-center">
      <canvas ref="canvas" height="1000" width="1000" class="canvas"></canvas>
      <button v-if="showResetButton"class="button-83 reset-button" @click="Reset_Canvas">Reset</button>
      <button v-if="showSubmitButton"class="button-83 submit-button" @click="Analyze_Canvas">Submit</button>
    </div>

    <div v-show="studentStore.getCurrentStep?.type === 'finish'">
      <div>Finish Canvas</div>
    </div>

  </div>
</template>

<script setup>


// import { onMounted, ref } from 'vue';
import {useTopicsStore} from "@/stores/topic.js";
import {computed, ref, watch} from 'vue';
import {useStepsStore} from "@/stores/step.js";
import {useStudentStore} from "@/stores/student.js";
import {stringify} from "postcss";
import {Init_Canvas} from "@/assets/Canvas_Page.js";
import {Init_Test} from "@/assets/Canvas_Test.js";
import {Init_Analysis} from "@/assets/Analysis";
import {initCanvasWithCountdown} from "@/assets/CanvasEventandSizeTest.js";

// import { Init_Description } from "@/assets/Canvas_Description.js";


const canvas = ref(null);
const showResetButton = ref(false)
const showSubmitButton = ref(false)

const studentStore = useStudentStore()
const currentStepLocal = computed(() => studentStore.currentStep)

watch(currentStepLocal, async (newStep) => {
  // Check if 'newStep' and 'newStep.id' are defined
  if (newStep && newStep.id) {
    if (newStep.type === "introduction") {
      showResetButton.value = false
      showSubmitButton.value = false
      // initCanvasWithCountdown(canvasForIntroduction.value, studentStore);
    }
    if (newStep.type === "description") {
      showResetButton.value = false
      showSubmitButton.value = false
      // initCanvasWithCountdown(canvasForIntroduction.value, studentStore);
    }
    if (newStep.type === "interactive") {
      showResetButton.value = true
      showSubmitButton.value = true
    }
    PName = newStep.pnameID;
    console.log('PName', PName)
    Init_Canvas(canvas, studentStore)

  } else {
    console.log("currentStep or currentTopic.id is undefined.");
  }
});

function Reset_Canvas() {
  Init_Practice()
};

const myAnalysisForVue = ref(0)

function Analyze_Canvas() {
  Init_Analysis()
  const studentStore = useStudentStore()
  if (studentStore.currentStep.id === '1.2') {
    studentStore.finishComprehensiveTest("plcrobot")
    return
  }
  studentStore.addLearningRecord(MyAnalysis)

};

function finishIntro() {
  const studentStore = useStudentStore();
  studentStore.finishCurrentStep()
}

function finishDescription() {
  const studentStore = useStudentStore();
  studentStore.finishCurrentStep()
}
</script>

<style scoped>
.canvas {
  border: 1px solid #000;
  display: flex;
  height: 100%;
  width: auto;
}

.reset-button {
  position: absolute;
  bottom: 10px;
  left: 40%;
  transform: translateX(-50%); /* Adjust this value as needed to position correctly */
}

.submit-button {
  position: absolute;
  bottom: 10px;
  left: 60%;
  transform: translateX(-50%); /* Adjust this value as needed to position correctly */
}

</style>
