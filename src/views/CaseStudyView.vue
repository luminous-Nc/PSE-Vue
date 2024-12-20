<template>
    <main class="flex h-full w-full flex-col items-center justify-start p-4 pt-[48px]">
        <case-step-bar></case-step-bar>
      <div class="w-full mt-2" id="stepTitle">
        <div class="text-3xl font-bold text-blue-600">
          {{currentStep?.title}}
        </div>
        <div class="text-3xl font-bold text-red-600">
          {{currentStep?.sub_title}}
        </div>

      </div>

      <!-- Canvas Area Filling the remaining space-->
      <div class="flex-grow flex justify-center mt-2 w-full max-h-[calc(100vh-12rem)]" >
        <div
            ref="caseStudyCanvas"
            class="border border-gray-400 shadow-lg w-full h-full"
        ></div>
      </div>
        <case-step-button></case-step-button>
    </main>
</template>

<script setup>
import {inject, computed, ref, onMounted, watch} from 'vue';
import caseStepBar from "@/components/CaseStepBar/index.vue";
import caseStepButton from "@/components/CaseStepButton/index.vue";
import {useCaseStore} from "@/stores/caseStudy.js";
import {initializeCanvas, renderCanvasContent} from "@/components/CaseCanvas/konvaUtils.js";

const caseStudyStore = useCaseStore()

const currentStep = computed(() => {
  if ( caseStudyStore.step_array[caseStudyStore.current_module]?.length>0) {
    return  caseStudyStore.step_array[caseStudyStore.current_module][caseStudyStore.current_step]
  } else {
    return {title:'',id:null}
  }

});

const caseStudyCanvas = ref(null);

onMounted(() => {
  initializeCanvas(caseStudyCanvas.value);
});

watch(
    () => currentStep.value.id,
    (newStepId) => {
      console.log('Current Step ID',newStepId)
      renderCanvasContent(newStepId);
    }
);



</script>

