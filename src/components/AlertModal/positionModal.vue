<!-- components/PositionModal.vue -->
<template>
    <div v-if="show" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-xl shadow-2xl max-w-2xl w-full">
            <div class="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 class="text-xl font-semibold">Module Coordinate</h3>
                <button @click="$emit('update:show', false)" class="text-gray-400 hover:text-gray-500">
                    ✕
                </button>
            </div>

            <div class="p-6 max-h-[70vh] overflow-y-auto">
                <table class="w-full">
                    <thead>
                    <tr class="text-sm font-medium text-gray-500 border-b border-gray-200">
                        <th class="pb-3 text-left">Module Name</th>
                        <th class="pb-3 text-right w-32">X</th>
                        <th class="pb-3 text-right w-32">Y</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                            v-for="(pos, index) in parsedPositions"
                            :key="index"
                            class="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                    >
                        <td class="py-3 text-gray-900">{{ pos.name }}</td>
                        <td class="py-3 text-right">{{ pos.x }}</td>
                        <td class="py-3 text-right">{{ pos.y }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    show: Boolean,
    positions: String
})

const parsedPositions = computed(() => {
    return props.positions.split('\n').map(line => {
        const [name, x, y] = line.split('\t')
        return { name, x, y }
    })
})
</script>