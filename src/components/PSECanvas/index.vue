<template>
    <canvas ref="canvas" height="1000" width="1000" class="canvas"></canvas>
    <button class="button-83 reset-button" @click="Reset_Canvas">Reset</button>
    <button class="button-83 submit-button" @click="Analyze_Canvas">Submit</button>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    const canvas = ref(null);
  
    PName = "P1";
    
    onMounted(() => {Init_Canvas(canvas)});

    function Reset_Canvas(){Init_Practice()};
    
    function Analyze_Canvas(){Init_Analysis()};
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