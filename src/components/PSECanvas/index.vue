<template>
  <div>
    <div v-show="studentStore.getCurrentStep?.type === 'introduction'">
      <div>Introduction Canvas</div>
      <button class="button-83 reset-button" @click="finishIntro">Finish</button>
    </div>

    <div v-show="studentStore.getCurrentStep?.type === 'description'">
      <div>Description Canvas</div>
      <button class="button-83 reset-button" @click="finishDescription">Finish</button>
    </div>

    <div v-show="studentStore.getCurrentStep?.type === 'interactive'">
      <canvas ref="canvas" height="1000" width="1000" class="canvas"></canvas>
      <button  class="button-83 reset-button" @click="Reset_Canvas">Reset</button>
      <button class="button-83 submit-button" @click="Analyze_Canvas">Submit</button>
    </div>

    <div v-show="studentStore.getCurrentStep?.type === 'finish'">
      <div>Finish Canvas</div>
    </div>

  </div>
</template>

<script setup>
    import { computed, ref, watch } from 'vue';
    import {useStudentStore} from "@/stores/student.js";

    const canvas = ref(null);

    const studentStore = useStudentStore()
    const currentStepLocal = computed(()=>studentStore.currentStep)

    watch(currentStepLocal, (newStep) => {
        // Check if 'newStep' and 'newStep.id' are defined
        if (newStep && newStep.id) {
            if (newStep.type == "interactive") {
              PName = "P" + newStep.pnameID;
              console.log('PName',PName)
              Init_Canvas(canvas)
            }
        }else{
            console.log("currentStep or currentTopic.id is undefined.");
        }
    });

    function Reset_Canvas(){Init_Practice()};

    const myAnalysisForVue = ref(0)
    function Analyze_Canvas(){
      Init_Analysis()
      const studentStore = useStudentStore()
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
