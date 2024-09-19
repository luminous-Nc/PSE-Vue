<template>
    <div class="min-h-screen bg-gray-100 flex justify-center items-center">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Learning Style Questionnaire</h2>

            <form @submit.prevent="submitAnswers">
                <div v-for="(question, index) in questions" :key="index" class="mb-4">
                    <h3 class="font-semibold mb-2">{{ question.question }}</h3>

                    <div v-for="(option, i) in question.options" :key="i" class="mb-1">
                        <label class="inline-flex items-center">
                            <input
                                    type="radio"
                                    :name="'question_' + index"
                                    :value="option"
                                    v-model="answers[index]"
                                    class="form-radio text-blue-500"
                            />
                            <span class="ml-2">{{ option }}</span>
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

            <div v-if="result" class="mt-6">
                <h3 class="text-lg font-semibold">Your Learning Style:</h3>
                <p class="text-gray-700 mt-2">{{ result }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

import { reactive, ref } from 'vue';

// Define questions and state management
const questions = [
    {
        question: "How do you prefer to learn new concepts?",
        options: ["Reading", "Listening", "Watching videos", "Hands-on practice"]
    },
    {
        question: "What helps you retain information better?",
        options: ["Visual aids", "Discussions", "Writing notes", "Practice problems"]
    },
    // Add more questions as needed
];

// State for answers and result
const answers = reactive({});
const result = ref(null);

// Submit function
const submitAnswers = () => {
    const learningStyle = calculateLearningStyle(answers);
    result.value = learningStyle;
};

// Simple calculation for learning style
const calculateLearningStyle = (answers) => {
    if (Object.values(answers).includes("Hands-on practice")) {
        return "Kinesthetic Learner";
    } else if (Object.values(answers).includes("Reading")) {
        return "Visual Learner";
    } else if (Object.values(answers).includes("Listening")) {
        return "Auditory Learner";
    } else {
        return "Mixed Learning Style";
    }
};
</script>


<style scoped>

</style>