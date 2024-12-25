<template>
    <main class="flex h-screen w-screen flex-col items-center justify-start p-4 pt-[48px]">
        <case-step-bar></case-step-bar>
        <div>{{currentStep}}</div>
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

            <canvas
                v-show="!showKonvaCanvas"
                ref="pseCanvas"
                height="1000"
                width="1000"
                class="w-auto h-auto border-gray-300"
            ></canvas>
        </div>
        <case-step-button></case-step-button>
    </main>
</template>

<script setup>
import {computed, ref, onMounted, watch, nextTick} from 'vue';
import caseStepBar from "@/components/CaseStepBar/index.vue";
import caseStepButton from "@/components/CaseStepButton/index.vue";
import {useCaseStore} from "@/stores/caseStudy.js";
import {initializeKonvaCanvas, renderCanvasContent} from "@/components/CaseCanvas/konvaUtils.js";
import {Init_Canvas, Set_Page_ID, Set_Page_Name} from "../../public/assets/canvas/Canvas_Page.js";
import {Load_Img} from "../../public/assets/canvas/Canvas_Image.js";

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
    setTimeout(() => {
        initializeKonvaCanvas(caseStudyCanvas.value);
        // let currentStep = caseStudyStore.step_array[caseStudyStore.current_module][caseStudyStore.current_step]
        // renderCanvasContent(currentStep.id, caseStudyCanvas.value);
    }, 100); // 等待100毫秒再初始化
});

watch(
    currentStep,
    (newStep,oldStep) => {
        if (newStep.type == oldStep.type) {
            renderCanvasContent(newStep.id,caseStudyCanvas.value)
        } else {
            if (newStep.type === "schematic" || newStep.type === "practice") {
                console.log('PSE Canvas')
                Load_Img(); // preload all images
                Set_Page_ID("case1.9.1.1");
                Set_Page_Name("haha");
                Init_Canvas(pseCanvas);
            } else {
                initializeKonvaCanvas(caseStudyCanvas.value);
                renderCanvasContent(newStep.id,caseStudyCanvas.value)
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

