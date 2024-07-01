<template>
    <canvas ref="canvas"  height="1000" width="1000" class="canvas"></canvas>
    <button class="center-button" @click="Init_Analysis">Submit</button>
</template>

<script setup>
    import { onMounted, ref, watch } from 'vue';

    const canvas = ref(null);
  
    onMounted(() => {Init_Canvas(canvas)});
    // watch(() => Init_Canvas(canvas), { deep: true });
</script>

<style scoped>
    .canvas {
        border: 1px solid #000;
        height: 100%;
    }
    .center-button {
        position: absolute;
        bottom: 20px; /* Adjust the value as needed */
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        background-color: #1beb53;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    
</style>