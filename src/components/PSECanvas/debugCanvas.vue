<template>
    <div class="w-full h-full">
        <div class="h-full flex justify-center">
            <canvas v-show="showCanvas" ref="canvas" height="1000" width="1000" class="canvas"></canvas>
            <button v-if="showResetButton" class="button-83 reset-button" @click="Reset_Canvas">Reset</button>
            <button v-if="showSubmitButton" class="button-83 submit-button" @click="Analyze_Canvas">Submit</button>
        </div>
        <positionModal
                v-model:show="showPositions"
                :positions="positionsText"
        />
    </div>
</template>

<script setup>


import {computed, nextTick, onMounted, ref, watch} from 'vue';
import {useStudentStore} from "@/stores/student.js";


import {
    Set_Page_Name,
    Init_Canvas_For_Debug
} from "../../../public/assets/canvas/Canvas_Page.js";
import {Init_Practice} from "../../../public/assets/test/Connection.js"
import {Init_Analysis} from "../../../public/assets/test/Analysis.js";
import {Load_Img} from "../../../public/assets/canvas/Canvas_Image.js";
import "../../../public/assets/css/ButtonStyle.css";
import {Add_Log} from '../../../public/assets/record/Log.js';
import {Init_Design_For_Debug, getModulePositions} from "../../../public/assets/canvas/Canvas_Design_Test.js";
import positionModal from "@/components/AlertModal/positionModal.vue";

const canvas = ref(null);
const showResetButton = ref(false);
const showSubmitButton = ref(false);
const showCanvas = ref(true);

defineExpose({
    loadPNameForDebug, loadPNameForDesign, endDesign
})

Load_Img(); // preload all images
showResetButton.value = true
showSubmitButton.value = true


onMounted(() => {

})

function loadPNameForDebug(targetPName) {
    console.log('Debug problem:', targetPName)
    showResetButton.value = true
    showSubmitButton.value = true


    Set_Page_Name("Debug" + targetPName);
    Init_Canvas_For_Debug(canvas, targetPName);
}

function loadPNameForDesign(targetPName) {
    console.log('Design problem:', targetPName)
    showResetButton.value = true
    showSubmitButton.value = true


    Set_Page_Name("Design" + targetPName);
    Init_Design_For_Debug(targetPName);

}

const showPositions = ref(false)
const positionsText = ref('')

function endDesign() {
    positionsText.value = getModulePositions()
    showPositions.value = true
}


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
