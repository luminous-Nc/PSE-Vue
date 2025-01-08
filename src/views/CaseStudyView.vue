<template>
    <main class="flex h-screen w-screen flex-col items-center justify-start p-4 pt-[48px]">
        <case-step-bar></case-step-bar>
<!--      -->
        <div class="mx-auto w-full max-w-[960px] mt-2" id="stepTitle">
            <div class="text-3xl font-bold text-blue-600">
                {{ currentStep?.title }}
            </div>
            <div class="text-3xl font-bold text-black">
                {{ currentStep?.sub_title }}
            </div>
        </div>

        <!-- Canvas Area Filling the remaining space-->
        <div class="flex justify-center w-full h-full mt-2">
            <div
                v-show="showKonvaCanvas"
                ref="caseStudyCanvas"
                class="caseStudyCanvas"
            ></div>

            <div class="flex flex-row" v-show="!showKonvaCanvas">
                <div class="relative items-center w-[500px] h-auto mr-5">
                    <img class="absolute top-[30%] w-full h-auto" :src="pseLeftTable">
                </div>

                <canvas
                    ref="pseCanvas"
                    height="1000"
                    width="1000"
                    class="w-auto h-auto border-gray-300 translate-y-[-50px] "
                ></canvas>
            </div>


        </div>
        <case-step-button></case-step-button>
    </main>
</template>

<script setup>
import {computed, ref, onMounted, watch, nextTick} from 'vue';
import caseStepBar from "@/components/CaseStepBar/index.vue";
import caseStepButton from "@/components/CaseStepButton/index.vue";
import {useCaseStore} from "@/stores/caseStudy.js";
import {apiBaseUrl, initializeKonvaCanvas, renderCanvasContent} from "@/components/CaseCanvas/konvaCore.js";
import {Init_Canvas, Set_Page_ID, Set_Page_Name} from "../../public/assets/canvas/Canvas_Page.js";
import {Load_Img} from "../../public/assets/canvas/Canvas_Image.js";

let pseLeftTable = ref("")
const caseStudyStore = useCaseStore()

const currentStep = computed(() => {
    if (caseStudyStore.step_array[caseStudyStore.current_module]?.length > 0) {
        return caseStudyStore.step_array[caseStudyStore.current_module][caseStudyStore.current_step]
    } else {
        return {title: '', id: null}
    }

});

const showKonvaCanvas = computed(()=>{
    if (currentStep.value.type!=='schematic' && currentStep.value.type!=='practice') {
        return true
    } else {
        return false
    }
})

const caseStudyCanvas = ref(null);
const pseCanvas = ref(null)

onMounted(async () => {
    await nextTick();
    Load_Img(); // preload all images for createJS canvas
    setTimeout(() => {
        initializeKonvaCanvas(caseStudyCanvas.value);
        // let currentStep = caseStudyStore.step_array[caseStudyStore.current_module][caseStudyStore.current_step]
        // renderCanvasContent(currentStep.id, caseStudyCanvas.value);
    }, 100); // 等待100毫秒再初始化
});

watch(
    currentStep,
    async (newStep, oldStep) => {
      // console.log('if same type', newStep.type === oldStep.type)
      if (newStep.type === oldStep.type) { //Always be introduction, keep using Konva
        renderCanvasContent(newStep.id, caseStudyCanvas.value)
      } else {
        if (newStep.type === "schematic" || newStep.type === "practice") {
          caseStudyStore.allow_next_step = false
          caseStudyStore.show_function_button = true
          pseLeftTable.value = apiBaseUrl + '/assets/images/caseStudy/1/' + newStep.id + '.png'
          if (newStep.type === "schematic") {
            caseStudyStore.function_key_name = 'start'
          } else if (newStep.type === "practice"){
            caseStudyStore.function_key_name = 'submit'
          }
          console.log('init PSE Canvas')
          Set_Page_ID(newStep.id);  // Change this to change P
          Init_Canvas(pseCanvas);
        } else { // introduction
          caseStudyStore.allow_next_step = true
          caseStudyStore.show_function_button = false
          await nextTick()
          initializeKonvaCanvas(caseStudyCanvas.value);
          renderCanvasContent(newStep.id, caseStudyCanvas.value)
        }
      }

    },
    {deep: true},
    {immediate: true}
);


</script>

<style>
.caseStudyCanvas {
    max-width:960px;
    max-height:540px;
    //width:960px;
    //height:540px;
    width: 100%; /* 宽度随容器调整 */
    height: 100%; /* 高度随容器调整 */
    aspect-ratio: 16/ 9;
    /* 保持画布宽高比
       margin: 20px auto; /* 居中 */
    object-fit: contain; /* 确保内容适应窗口 */
}
</style>

