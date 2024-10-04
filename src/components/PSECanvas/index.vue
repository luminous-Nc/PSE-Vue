<template>
    <div class="w-full h-full">
        <div class="h-full flex justify-center">
            <canvas ref="canvas" height="1000" width="1000" class="canvas"></canvas>
            <button v-if="showResetButton" class="button-83 reset-button" @click="Reset_Canvas">Reset</button>
            <button v-if="showSubmitButton" class="button-83 submit-button" @click="Analyze_Canvas">Submit</button>
        </div>

        <div v-show="studentStore.getCurrentStep?.type === 'finish'">
            <div>Finish Canvas</div>
        </div>

    </div>
</template>

<script setup>


import {computed, nextTick, onMounted, ref, watch} from 'vue';
import {useStudentStore} from "@/stores/student.js";
import {stringify} from "postcss";
import {Destroy_Canvas, Init_Canvas} from "../../../public/assets/Canvas_Page.js";
import {Init_Analysis} from "../../../public/assets/Analysis.js";
import {Next_Step_Stop_Audio} from "../../../public/assets/Canvas_Description.js";


const canvas = ref(null);
const showResetButton = ref(false);
const showSubmitButton = ref(false);

const studentStore = useStudentStore()
const currentStepLocal = computed(() => studentStore.currentStep)
const currentStepId = computed(()=> studentStore.currentStep.id)

onMounted(()=> {
    checkId();
})

const checkId = () => {
    const interval = setInterval(() => {
        if (studentStore.currentStep !== undefined && studentStore.currentStep.id !== 0) {

            initPSECanvas();
            clearInterval(interval); // 一旦检测到 ID 已存在，停止检测
        }
        console.log('check',studentStore.currentStep)
    }, 50); // 每100ms检测一次
};
const initPSECanvas = () => {
    showResetButton.value = false
    showSubmitButton.value = false
    if (studentStore.currentStep.type === "introduction") {
        studentStore.currentStepFinished = true
    }

    if (studentStore.currentStep.type === "interactive") {
        showResetButton.value = true
        showSubmitButton.value = true
        studentStore.currentStepFinished = false
    }

    PName = studentStore.currentStep.pnameID;
    console.log('PName', PName)

    Init_Canvas(canvas);
}
watch(currentStepLocal,
    (newStep, oldStep) => {
    // Check if 'newStep' and 'newStep.id' are defined
    if (oldStep && oldStep.id) {
        // Destroy_Canvas();
        if (oldStep.type === "description") {
            Next_Step_Stop_Audio()
        }
    }
    if (newStep && newStep.id) {
        nextTick(()=> {

        })
        showResetButton.value = false
        showSubmitButton.value = false
        if (newStep.type === "introduction") {
            studentStore.currentStepFinished = true
        }

        if (newStep.type === "interactive") {
            showResetButton.value = true
            showSubmitButton.value = true
            studentStore.currentStepFinished = false
        }

        PName = newStep.pnameID;
        console.log('PName', PName)

        Init_Canvas(canvas);


    } else {
        console.log("currentStep or currentTopic.id is undefined.");
    }
},
{deep:true},
    { immediate: true }
);

function Reset_Canvas() {
    Init_Practice()
};


function Analyze_Canvas() {
    let MyAnalysis = Init_Analysis();
    const studentStore = useStudentStore()
    showResetButton.value = false
    showSubmitButton.value = false
    if (studentStore.currentStep.id === '1.2') {
        studentStore.finishComprehensiveTest(MyAnalysis)
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
    bottom: 1rem;
    left: 40%;
    transform: translateX(-50%); /* Adjust this value as needed to position correctly */
}

.submit-button {
    position: absolute;
    bottom: 1rem;
    left: 60%;
    transform: translateX(-50%); /* Adjust this value as needed to position correctly */
}

</style>
