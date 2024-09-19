<template>
    <main class="flex min-h-screen flex-col items-center justify-start p-24 space-y-24">
        <div class="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        </div>

        <div class="relative flex place-items-center  m-3 z-[-1] text-3xl/10 font-extrabold text-center">
            Problem Solving Environment for PLC and Robot Interface Integration V2
        </div>

        <div className="mb-32 grid text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
            <div
                v-for="topic in topics"
                :key=topic.name
                @click="goToTopicPage(topic)"
                class="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 relative"
            >
                <h2 class="mb-3 text-3xl font-semibold transition-all group-hover:font-bold">
                    {{topic.name}}
                    <span
                        class="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                </h2>
                <p class="m-0 max-w-[30ch] text-sm opacity-50">
                    {{topic.desc}}
                </p>
            </div>
        </div>
    </main>
</template>

<script setup>
import { inject, computed } from 'vue';
import { useTopicsStore } from '../stores/topic';
import { useRoute, useRouter } from 'vue-router'
import {storeToRefs} from "pinia";


const topicsStore = inject('topicStore')
const { topics } = storeToRefs(topicsStore)

const router = useRouter()
function goToTopicPage(topic) {
    router.push('/topic?id='+topic.id)
}
</script>

