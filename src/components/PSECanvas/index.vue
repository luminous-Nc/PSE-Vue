<template>
    <div class="w-full h-full">
        <div class="h-full flex justify-center" v-show="studentStore.getCurrentStep?.type === 'introduction'">
            <canvas ref="canvasForIntroduction" height="1000" width="1000" class="canvas"></canvas>
        </div>

        <div v-show="studentStore.getCurrentStep?.type === 'description'" class="h-full flex justify-center">
            <canvas ref="canvasForIntroduction" height="1000" width="1000" class="canvas"></canvas>
        </div>

        <div v-show="studentStore.getCurrentStep?.type === 'interactive'" class="h-full flex justify-center">
            <canvas ref="canvasForInteractive" height="1000" width="1000" class="canvas"></canvas>
            <button class="button-83 reset-button" @click="Reset_Canvas">Reset</button>
            <button class="button-83 submit-button" @click="Analyze_Canvas">Submit</button>
        </div>

        <div v-show="studentStore.getCurrentStep?.type === 'finish'">
            <div>Finish Canvas</div>
        </div>

    </div>
</template>

<script setup>
import {computed, nextTick, ref, watch} from 'vue';
import {useStudentStore} from "@/stores/student.js";

const canvasForIntroduction = ref(null);
const canvasForInteractive = ref(null);

const studentStore = useStudentStore()
const currentStepLocal = computed(() => studentStore.currentStep)

watch(currentStepLocal, async (newStep) => {
    // Check if 'newStep' and 'newStep.id' are defined
    if (newStep && newStep.id) {
        if (newStep.type === "introduction") {
            initCanvasWithCountdown(canvasForIntroduction.value, studentStore);
        }
        if (newStep.type === "description") {
            initCanvasWithCountdown(canvasForIntroduction.value, studentStore);
        }
        if (newStep.type === "interactive") {
            PName = "P" + newStep.pnameID;
            console.log('PName', PName)
            Init_Canvas(canvasForInteractive, studentStore)
        }

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
    if (studentStore.currentStep.id === '1.2' ) {
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
