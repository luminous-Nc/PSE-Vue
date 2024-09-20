 import {defineStore} from 'pinia';
import {useRoute} from "vue-router";
 import {useStepsStore} from "@/stores/step.js";

export const useStudentStore = defineStore('student', {
    state: () => {
        return {
            currentTopic: undefined,
            currentStep: undefined,
            currentStepFinished:false,
            learningPath:[1,2,3,4],
        }
    },
    actions: {
        downloadTopics() {
          this.currentStepFinished = true
        },

        nextStep() {
          const stepsStore = useStepsStore()

        },

        lastStep() {

        }
    }
});
