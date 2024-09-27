<template>
  <div>
    <div v-show="stepStore.getCurrentStep?.type === 'introduction'">
      <div>Introduction Canvas</div>
      <button class="button-83 reset-button" @click="finishIntro">Finish</button>
    </div>

    <div v-show="stepStore.getCurrentStep?.type === 'description'">
      <div>Description Canvas</div>
      <button class="button-83 reset-button" @click="finishDescription">Finish</button>
    </div>

    <div v-show="stepStore.getCurrentStep?.type === 'interactive'">
      <canvas ref="canvas" height="1000" width="1000" class="canvas"></canvas>
      <button  class="button-83 reset-button" @click="Reset_Canvas">Reset</button>
      <button class="button-83 submit-button" @click="Analyze_Canvas">Submit</button>
    </div>

    <div v-show="stepStore.getCurrentStep?.type === 'finish'">
      <div>Finish Canvas</div>
    </div>

  </div>
</template>

<script setup>
    // import { onMounted, ref } from 'vue';
    import {useTopicsStore} from "@/stores/topic.js";
    import { computed, ref, watch } from 'vue';
    import {useStepsStore} from "@/stores/step.js";
    import {useStudentStore} from "@/stores/student.js";
    import { stringify } from "postcss";
    import { Init_Canvas } from "@/assets/Canvas_Page.js";
    import { Init_Test } from "@/assets/Canvas_Test.js";
    import { Init_Analysis } from "@/assets/Analysis";

    // import { Init_Description } from "@/assets/Canvas_Description.js";

    const canvas = ref(null);
    const stepStore = useStepsStore()
    const currentStepLocal = computed(()=>stepStore.currentStep)

    watch(currentStepLocal, (newStep) => {
        // Check if 'newStep' and 'newStep.id' are defined
        if (newStep && newStep.id) {
            if (newStep.type == "interactive") {
              // PName = "P" + newStep.id;
              PName = "P5";
              // PName = "2-2";
              console.log('PName', PName)
              Init_Canvas(canvas);
            }
        }else{
            console.log("currentStep or currentTopic.id is undefined.");
        }
    });

    function Reset_Canvas(){Init_Test()};

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
