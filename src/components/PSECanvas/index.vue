<template>
  <div>
    <div v-if="stepStore.getCurrentStep?.type === 'interactive'">
      <canvas ref="canvas" height="1000" width="1000" class="canvas"></canvas>
      <button  class="button-83 reset-button" @click="Reset_Canvas">Reset</button>
      <button class="button-83 submit-button" @click="Analyze_Canvas">Submit</button>
    </div>
    <div v-if="stepStore.getCurrentStep?.type === 'introduction'">
      <div>Introduction Canvas</div>
      <button class="button-83 reset-button" @click="FinishIntro">Finish</button>
    </div>

  </div>
</template>

<script setup>
    // import { onMounted, ref } from 'vue';
    import {useTopicsStore} from "@/stores/topic.js";
    import { computed, ref, watch } from 'vue';
    import {useStepsStore} from "@/stores/step.js";
    import {useStudentStore} from "@/stores/student.js";

    const canvas = ref(null);

    const stepStore = useStepsStore()
    const currentStepLocal = computed(()=>stepStore.currentStep)

    watch(currentStepLocal, (newStep) => {
        // Check if 'newTopic' and 'newTopic.name' are defined
        if (newStep && newStep.id) {
            PName = "P" + newStep.id;
            console.log('PName',PName)
            Init_Canvas(canvas)
        }else{
            console.log("currentTopic or currentTopic.name is undefined.");
        }
    });
    // PName = "P8";

    // onMounted(() => {Init_Canvas(canvas)});


    function Reset_Canvas(){Init_Practice()};

    function Analyze_Canvas(){Init_Analysis()};

    function FinishIntro() {
        const studentStore = useStudentStore();
        studentStore.downloadTopics()
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
