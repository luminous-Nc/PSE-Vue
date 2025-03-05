<template>
    <main class="flex h-screen w-screen flex-col items-center justify-start p-4 pt-[48px] overflow-y-hidden">
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

            <div class="flex flex-row max-h-screen" v-show="!showKonvaCanvas">
                <div class="relative w-4/12 max-w-[400px] h-auto mr-5 mt-16">
                    <img
                        class="w-auto h-auto max-w-full max-h-full" :src="pseLeftTable">
                </div>
                <canvas
                    ref="pseCanvas"
                    height="1000"
                    width="1000"
                    class="w-auto h-full max-h-screen border-gray-300 translate-y-[-50px] "
                ></canvas>
            </div>
        </div>
        <case-step-button></case-step-button>
    </main>
</template>

<script setup>
import {computed, ref, onMounted, watch, nextTick} from 'vue';
import caseStepButton from "@/components/CaseStepButton/index.vue";
import {usePLCInterfacingStore} from "@/stores/plcInterfacing.js";
import {apiBaseUrlPLC, initializeKonvaCanvas, renderCanvasContent} from "@/components/CaseCanvas/konvaCore.js";
import {Init_Canvas, Set_Page_ID, Set_Page_Name} from "../../public/assets/canvas/Canvas_Page.js";
import {Load_Img} from "../../public/assets/canvas/Canvas_Image.js";
import {useRoute} from "vue-router";

let pseLeftTable = ref("")
const plcInterfacingStore = usePLCInterfacingStore()

const route = useRoute()
const plcCaseName = route.params.plcCaseName

const plcCaseStore = usePLCInterfacingStore()
plcCaseStore.loadPLCCase(plcCaseName)


const currentStep = computed(() => {
    if (plcInterfacingStore.step_array[plcInterfacingStore.current_module]?.length > 0) {
        return plcInterfacingStore.step_array[plcInterfacingStore.current_module][plcInterfacingStore.current_step]
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
          console.error(newStep)
          renderCanvasContent(newStep.id, caseStudyCanvas.value)
      } else {
        if (newStep.type === "schematic" || newStep.type === "practice") {
          plcInterfacingStore.allow_next_step = false
          plcInterfacingStore.show_function_button = true
          pseLeftTable.value = apiBaseUrlPLC + '/assets/images/PLCInterfacing/'+plcInterfacingStore.current_case_study.case_path+'/' + newStep.id + '.png'
          if (newStep.type === "schematic") {
            plcInterfacingStore.function_key_name = 'start'
          } else if (newStep.type === "practice"){
            plcInterfacingStore.function_key_name = 'submit'
          }
          console.log('init PSE Canvas')
          Set_Page_ID(newStep.id);  // Change this to change P
          Init_Canvas(pseCanvas);
        } else { // introduction
            console.error(newStep)
          plcInterfacingStore.allow_next_step = true
          plcInterfacingStore.show_function_button = false
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

