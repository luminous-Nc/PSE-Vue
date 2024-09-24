<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div v-if="result==='null'" class="h-[80%] flex justify-center items-center">
            <div class="bg-white p-8 rounded-lg shadow-lg overflow-y-auto h-[100%] w-[80%]">
                <h2 class="text-2xl font-bold mb-6 text-center">Learning Style Questionnaire</h2>

                <form @submit.prevent="submitAnswers">
                    <div v-for="(question, index) in questionnaireStore.getAllQuestions" :key="index" class="mb-4">
                        <h3 class="font-semibold mb-2">{{ question.question }}</h3>

                        <div v-for="(option, i) in question.options " :key="i" class="mb-1">
                            <label class="inline-flex items-center">
                                <input
                                    type="radio"
                                    :name="'question_' + index"
                                    :value="option.points"
                                    v-model="answers[index]"
                                    class="form-radio text-blue-500"
                                />
                                <span class="ml-2">{{ option.text }}</span>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
        <div v-else class="h-[80%] w-[60%] flex justify-center items-center">
            <div class="bg-white p-8 rounded-lg shadow-lg overflow-y-auto h-[100%]">
                <h2 class="text-2xl font-bold mb-6 text-center">Your Learning Style</h2>
                <h3>You are {{result}} learner!</h3>
                <button @click="closeWindow"
                    class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
                >
                    Close
                </button>
            </div>
        </div>
    </div>

</template>

<script setup>

import { reactive, ref } from 'vue';
import {useQuestionnaireStore} from "@/stores/questionnaire.js";

const questionnaireStore = useQuestionnaireStore()
// State for answers and result
const answers = reactive({});
const result = ref("null");

// Submit function
const closeWindow = ()=> {

}
const submitAnswers = () => {
    const totalScore = Object.values(answers).reduce((sum, currentValue) => sum + currentValue, 0);
    console.log('Total Score:', totalScore);
    let learningStyle = ""

    if (totalScore >0) {
        learningStyle =  "Global";
    } else if (totalScore <0) {
        learningStyle =  "Sequential";
    }
    result.value = learningStyle;
};


</script>


<style scoped>

</style>