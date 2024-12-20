<template>
    <main class="flex min-h-screen flex-col items-center justify-start p-4 pt-[48px] space-y-24">
        <case-step-bar></case-step-bar>
        <div>Current Case Study {{caseStudyName}}</div>
        <div>Module:{{currentModule}}</div>
        <div>Step:{{currentStep}}</div>
        <case-step-button></case-step-button>
    </main>
</template>

<script setup>
import {inject, computed, ref} from 'vue';
import { useRoute, useRouter } from 'vue-router'
import {storeToRefs} from "pinia";
import {useTopicsStore} from "@/stores/topic.js";
import caseStepBar from "@/components/CaseStepBar/index.vue";
import caseStepButton from "@/components/CaseStepButton/index.vue";
import {useCaseStore} from "@/stores/caseStudy.js";


const route = useRoute()

const caseStudyName = route.params.caseStudyName

const caseStudyStore = useCaseStore()

const moduleArray = computed(() => caseStudyStore.module_array);
const stepArray = computed(() => caseStudyStore.step_array);
const currentModule = computed(()=> caseStudyStore.current_module)
const currentStep = computed(() => caseStudyStore.current_step)



</script>

