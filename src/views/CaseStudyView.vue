<template>
    <main class="flex h-full w-full flex-col items-center justify-start p-4 pt-[48px]">
        <case-step-bar></case-step-bar>
        <div class="max-w-[1200px] w-full mt-2" id="stepTitle">
            <div class="text-3xl font-bold text-blue-600">
                {{ currentStep?.title }}
            </div>
            <div class="text-3xl font-bold text-black">
                {{ currentStep?.sub_title }}
            </div>

        </div>

        <!-- Canvas Area Filling the remaining space-->
        <div class="flex-grow flex justify-center mt-2 w-full">
            <div
                    ref="caseStudyCanvas"
                    class="caseStudyCanvas"
            ></div>
        </div>
        <case-step-button></case-step-button>
    </main>
</template>

<script setup>
import {computed, ref, onMounted, watch, nextTick} from 'vue';
import caseStepBar from "@/components/CaseStepBar/index.vue";
import caseStepButton from "@/components/CaseStepButton/index.vue";
import {useCaseStore} from "@/stores/caseStudy.js";
import {initializeCanvas, renderCanvasContent} from "@/components/CaseCanvas/konvaUtils.js";

const caseStudyStore = useCaseStore()

const currentStep = computed(() => {
    if (caseStudyStore.step_array[caseStudyStore.current_module]?.length > 0) {
        return caseStudyStore.step_array[caseStudyStore.current_module][caseStudyStore.current_step]
    } else {
        return {title: '', id: null}
    }

});

const caseStudyCanvas = ref(null);

onMounted(async () => {
    await nextTick();
    setTimeout(() => {
        initializeCanvas(caseStudyCanvas.value);
    }, 100); // 等待100毫秒再初始化
});

watch(
    () => currentStep.value.id,
    (newStepId) => {
        // console.log('Current Step ID',newStepId)
        renderCanvasContent(newStepId, caseStudyCanvas.value);
    }
);


</script>

<style>
.caseStudyCanvas {
    max-width: 1200px; /* 设置最大宽度 */
    max-height: 800px; /* 设置最大高度 */
    width: 100%; /* 宽度随容器调整 */
    height: 100%; /* 高度随容器调整 */
    aspect-ratio: 2 / 1;
    /* 保持画布宽高比
       margin: 20px auto; /* 居中 */
    object-fit: contain; /* 确保内容适应窗口 */
}
</style>

