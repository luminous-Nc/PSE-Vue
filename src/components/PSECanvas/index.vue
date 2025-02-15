<template>
    <div class="w-full h-full">
        <div class="h-full flex justify-center">
            <canvas v-show="showCanvas" ref="canvas" height="1000" width="1000" class="canvas"></canvas>
            <div class="h-full flex flex-col justify-center" v-show="studentStore.getCurrentStep?.type === 'finish'">
                <img src="/assets/images/Right_Panel_Image.jpg">
            </div>
            <button v-if="showResetButton" class="button-83 reset-button" @click="Reset_Canvas">Reset</button>
            <button v-if="showSubmitButton" class="button-83 submit-button" @click="Analyze_Canvas">Submit</button>
        </div>


    </div>
</template>

<script setup>


import {computed, nextTick, onMounted, ref, watch} from 'vue';
import {useStudentStore} from "@/stores/student.js";
import {stringify} from "postcss";

import {
    Destroy_Canvas, Init_Canvas,
    Set_Page_ID, Set_Page_Name,
    PageID
} from "../../../public/assets/canvas/Canvas_Page.js";
import {Init_Test} from "../../../public/assets/canvas/Canvas_Test.js";
import {Init_Practice} from "../../../public/assets/test/Connection.js"
import {Init_Analysis} from "../../../public/assets/test/Analysis.js";
import {initCanvasWithCountdown} from "../../../public/assets/CanvasEventandSizeTest.js";
import {Next_Step_Stop_Audio} from "../../../public/assets/canvas/Canvas_Description.js";
import {Load_Img} from "../../../public/assets/canvas/Canvas_Image.js";
import "../../../public/assets/css/ButtonStyle.css";
import {Add_Log} from '../../../public/assets/record/Log.js';
import {Save_Data} from '../../../public/assets/record/File_Manager.js';

const canvas = ref(null);
const showResetButton = ref(false);
const showSubmitButton = ref(false);
const showCanvas = ref(true);

const studentStore = useStudentStore();
const currentStepLocal = computed(() => studentStore.currentStep);

Load_Img(); // preload all images

onMounted(() => {
    checkId();
})

const checkId = () => {
    const interval = setInterval(() => {
        if (studentStore.currentStep !== undefined && studentStore.currentStep.id !== 0) {

            initPSECanvas();
            clearInterval(interval); // 一旦检测到 ID 已存在，停止检测
        }
        // console.log('check',studentStore.currentStep)
    }, 100); // 每100ms检测一次
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


    Set_Page_ID(studentStore.currentStep.pnameID);
    Set_Page_Name(studentStore.currentStep.menu_text);
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

            if (newStep.type === "finish") {
                showCanvas.value = false
                Save_Data();
            }

            Set_Page_ID(newStep.pnameID);
            Set_Page_Name(studentStore.currentStep.menu_text);
            Init_Canvas(canvas);

        } else {
            console.log("currentStep or currentTopic.id is undefined.");
        }
    },
    {deep: true},
    {immediate: true}
);

function Reset_Canvas() {
    Init_Practice()
    // collect time ticker
    Add_Log("Click", "Reset Button");
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

    // collect time ticker
    Add_Log("Click", "Submit Button");
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
