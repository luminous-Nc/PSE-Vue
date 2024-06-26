<template>
    <canvas ref="canvas" width="600" height="400" class="border"></canvas>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
    points: {
        type: Array,
        required: true,
    }
});

const canvas = ref(null);

const drawPoints = () => {
    if (!canvas.value) return;

    const ctx = canvas.value.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height); // Clear the canvas

    if (!props.points) {
        return;
    }
    props.points.forEach(point => {
        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(point.cord[0], point.cord[1], 5, 0, 2 * Math.PI);
        ctx.fill();
    });
};

onMounted(drawPoints);
watch(() => props.points, drawPoints, { deep: true });
</script>

<style scoped>
.canvas {
    border: 1px solid #000;
}
</style>