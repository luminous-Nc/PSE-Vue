<template>
    <main class="overflow-y-auto h-screen bg-gray-300">
        <AlertModal
            v-model:show="showAlert"
            title="No Selected Problem"
            message="Select a Problem first"
        />

        <div class="flex justify-between h-full pt-16 px-2 pb-2 space-x-2">

            <div
                class="flex flex-col justify-between w-1/3 p-6 bg-white border border-gray-300 rounded-lg shadow">
                <div class="flex-shrink-0 basis-11/12 overflow-y-auto text-lg flex-col flex w-full">
                    <div v-for="PName in reversedATPage" :key="PName" class="text-black" @click="handlePNameClick(PName)">
                        <h3  class="text-xl cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors"
                             :class="{ 'text-blue-600 font-bold': selectedPName === PName }">
                            {{PName}}
                        </h3>
                    </div>
                </div>

                <div class="justify-center flex mb-3 flex-shrink-0 basis-1/12 text-2xl">

                    <button @click="DesignModel" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {{ designButtonValue}}
                    </button>

                </div>
            </div>

            <div class= "flex items-center justify-center
                 overflow-clip block w-2/3
                 bg-white border border-gray-300 rounded-lg shadow-2xl
                 relative">
                <DebugCanvas ref="debugCanvasRef"/>
            </div>
        </div>
    </main>
</template>
<script setup>

import {computed, onMounted, reactive, ref, watch} from 'vue';
import AlertModal from '@/components/AlertModal/index.vue'
import DebugCanvas from "@/components/PSECanvas/debugCanvas.vue";
import {ATPage} from "../../public/assets/properties/Properties_Page.js";

const reversedATPage = computed(() => {
    return [...ATPage].reverse(); // 创建新数组避免修改原始数据
});

const debugCanvasRef = ref(null)
const selectedPName = ref(null);

const designButtonValue = ref("Design Mode")

const handlePNameClick = (pName) => {
    selectedPName.value = pName; // 更新选中状态
    if (debugCanvasRef.value) {

        debugCanvasRef.value.loadPNameForDebug(pName)
    }
}

const showAlert = ref(false)
const DesignModel = () => {
    if (!selectedPName.value) {
        showAlert.value = true
        return
    } else {
        if (designButtonValue.value === "Design Mode") {
            debugCanvasRef.value.loadPNameForDesign(selectedPName.value)
            designButtonValue.value = "End Design"
        } else if (designButtonValue.value === "End Design") {
            debugCanvasRef.value.endDesign()
            designButtonValue.value = "Design Mode"
        }

    }
}

</script>
<style scoped>

</style>
