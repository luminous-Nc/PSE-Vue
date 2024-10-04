<template>
    <div class="m-2 mt-16  w-[calc(100%-1rem)] h-[calc(100vh-4.5rem)] bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center">
        <div class="text-center pt-8">
            <h1 class="text-5xl font-bold mb-6">{{ studentStore.getLearningStyle }} Learner</h1>
            <div class="border-t-4 border-blue-600 w-6/12 mx-auto mb-6"></div>
        </div>
        <div class="overflow-y-auto flex flex-col justify-start items-center ">
            <div class="text-center pb-8 flex justify-center items-center flex-col w-full">
                <p v-if="studentStore.getLearningStyle=='Sequential'"
                   class="text-gray-600 max-w-3xl mx-auto text-justify mt-3">
                    <span class="font-bold text-blue-500">Sequential Learners</span> organize information in a
                    “sequential” or linear way. They learn best with systematic steps, that usually progress in
                    difficulty.
                </p>

                <p v-if="studentStore.getLearningStyle=='Global'"
                   class="text-gray-600 max-w-3xl mx-auto text-justify mt-3">
                    <span class="font-bold text-blue-500">Global Learners</span> organize information
                    holistically. They often look unorganized in their process, but often land on a more creative
                    conclusion or outcome.
                </p>

                <p v-if="studentStore.getLearningStyle=='Sequential'"
                   class="text-gray-600 max-w-3xl mx-auto text-justify mt-3">
                    <span class="font-bold text-blue-500">HOW TO IMPROVE HOW YOUR LEARN</span> If you are a sequential
                    Learner, build your Growth Plan to slowly progress the difficulty level of what you are learning.
                    Build a strong foundation and grow from there. Take the PLC courses, then Robot, PLC & Robot, and don’t jump around.
                </p>


                <p v-if="studentStore.getLearningStyle=='Global'"
                   class="text-gray-600 max-w-3xl mx-auto text-justify mt-3">
                    <span class="font-bold text-blue-500">HOW TO IMPROVE HOW YOUR LEARN</span> If you are a global learner, you have to work to get an overall sense of the full topic you are studying. Relate the subject to things you already know. For example, if you are a good cook, you know that a recipe has multiple ingredients needed in a particular order to produce the best results. If you are learning to build a digital marketing plan, know that they work similar to recipes; where the right channel in a specific order will lead to amazing results. These sorts of associations will help you learn faster.
                </p>
                <div class="w-1/3 mt-4 flex justify-center">
                    <img v-if="studentStore.getLearningStyle=='Global'" src='/assets/images/global.jpeg'>
                    <img v-if="studentStore.getLearningStyle=='Sequential'" src='/assets/images/sequential.jpeg'>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>
<script setup>
import {useStudentStore} from "@/stores/student.js";
import {onMounted} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
onMounted(() => {
    // 检查值是否为null，如果是则跳转
    if (studentStore.getLearningStyle === 'null') {
        router.push({name:'learning'});  // 跳转到根路径
    }
});
const studentStore = useStudentStore()
</script>