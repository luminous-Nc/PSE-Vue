<template>
    <div class="m-2 mt-16  w-[calc(100%-1rem)] h-[calc(100%-4.5rem)] bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center">
        <div class="text-center pt-8">
            <h1 class="text-5xl font-bold mb-6">The Learning Styles Quiz</h1>
            <div class="border-t-4 border-blue-600 w-6/12 mx-auto mb-6"></div>
        </div>
        <div class="overflow-y-auto flex flex-col justify-start items-center ">

            <div v-if="result==='null'">
                <div class="text-center pb-8">
                    <p class="text-gray-600 max-w-3xl mx-auto text-justify">
                        The term <b>learning styles</b> is used to describe how people collect, organize, analyze, store
                        and
                        figure out concept. The understanding of students' natural preference will facilitate faster
                        learning and reduce frustration and failures.
                    </p>
                    <p class="text-gray-600 max-w-3xl mx-auto text-justify mt-3">
                        Take the quiz below to find your learning styles in <b>Sequential vs Global</b>. This determines
                        how
                        people prefer to organize information and understand it. Sequential learners will prefer a
                        step-by-step, orderly method, while global learners prefer holistic thinking and looking at the
                        big
                        picture.
                    </p>
                </div>
                <div class="p-8 w-4/5">
                    <div class=" divide-y divide-solid">
                        <div v-for="(question, index) in questionnaireStore.getAllQuestions"
                             :key="index"
                             class="mb-4">
                            <h3 class="font-sans text-xl mb-2 mt-2"
                                :class="{ 'text-red-500 font-bold': missingAnswers.includes(index) }">{{
                                question.question
                                }}</h3>

                            <div v-for="(option, i) in question.options " :key="i">
                                <label class="inline-flex items-center mb-2">
                                    <input
                                            type="radio"
                                            :name="'question_' + index"
                                            :value="option.points"
                                            v-model="answers[index]"
                                            class="checked:bg-blue-500 required:border-red-500"
                                    />
                                    <span class="font-sans text-lg ml-2 pt-1">{{ option.text }}</span>
                                </label>
                            </div>
                        </div>

                        <div v-if="errorMessage" class="text-red-500 text-center py-4">
                            {{ errorMessage }}
                        </div>

                        <div class="flex justify-center w-full">
                            <button
                                    @click="analyseLearningStyle"
                                    class="mx-auto bg-blue-500 text-xl text-white my-6 py-2 px-4 rounded hover:bg-blue-600 w-1/4"
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
                <div v-else class="p-8 w-full overflow-y-auto">
                    <div class="text-center">
                        <div class="font-bold text-5xl font-sans">You are a <span class="text-blue-500">{{
                            result
                            }}</span>
                            learner.
                        </div>
                        <div class="flex justify-center items-center flex-col w-full">
                            <div class="w-1/3 mt-4 flex justify-center">
                                <img v-if="result=='Global'" src='@/assets/images/global.jpeg'>
                                <img v-if="result=='Sequential'" src='@/assets/images/sequential.jpeg'>
                            </div>

                            <button
                                    @click="startLearning"
                                    class="mx-auto bg-blue-500 text-xl text-white my-6 py-2 px-4 rounded hover:bg-blue-600 w-1/4"
                            >
                                Start Learning
                            </button>
                        </div>

                    </div>

            </div>
        </div>
    </div>


</template>

<script setup>
import {reactive, ref, defineEmits, inject} from 'vue'
import {useQuestionnaireStore} from "@/stores/questionnaire.js";
import {useStudentStore} from "@/stores/student.js";
import {useRouter} from'vue-router'

const questionnaireStore = useQuestionnaireStore()
const studentStore = useStudentStore()
// State for answers and result
const answers = reactive({});
const result = ref("null");

const missingAnswers = reactive([]); // Track unanswered questions
const errorMessage = ref("");

// Submit function
const closeWindow = () => {

}
const analyseLearningStyle = () => {
    missingAnswers.length = 0; // Reset missing answers
    errorMessage.value = "";

    questionnaireStore.getAllQuestions.forEach((_, index) => {
        if (answers[index] === undefined) {
            missingAnswers.push(index);
        }
    });

    // If there are missing answers, show an error message
    if (missingAnswers.length > 0) {
        errorMessage.value = "Please answer all questions.";
        return;
    }


    const totalScore = Object.values(answers).reduce((sum, currentValue) => sum + currentValue, 0);
    console.log('Total Score:', totalScore);
    let learningStyleResult = ""

    if (totalScore > 0) {
        learningStyleResult = "Global";
    } else if (totalScore < 0) {
        learningStyleResult = "Sequential";
    }
    result.value = learningStyleResult;

};

const emit = defineEmits(['closeQuizWindow'])
const reload =  inject("reload");
const router = useRouter()
const startLearning = () => {
    studentStore.setLearningStyle(result.value)
    studentStore.initLearningPath()
    emit('closeQuizWindow')
    // router.go()
}

</script>


<style scoped>

</style>