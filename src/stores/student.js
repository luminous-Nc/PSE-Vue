import {defineStore} from 'pinia';
import {useStepsStore} from "@/stores/step.js";

export const useStudentStore = defineStore('student', {
    state: () => {
        return {
            currentTopic: undefined,
            currentStep: undefined,
            currentStepFinished:false,
            learningPath:[1,2,3,4,5,6,7],
            learningRecord:{},
            responseMessage:''
        }
    },
    actions: {
        finishCurrentStep() {
          this.currentStepFinished = true
        },

        async nextStep() {
            const stepsStore = useStepsStore()
            const currentIndex = this.learningPath.indexOf(this.currentStep.id)
            console.log('currentIndex',currentIndex)
            const nextStepID = this.learningPath[currentIndex + 1]
            console.log('nextStepID',nextStepID)
            await stepsStore.setCurrentStepByID(nextStepID)
            this.currentStep = stepsStore.getCurrentStep
            this.currentStepFinished = false
            this.responseMessage = ""
        },

        async lastStep() {
            const stepsStore = useStepsStore()
            const currentIndex = this.learningPath.indexOf(this.currentStep.id)
            const nextStepID = learningPath[currentIndex + 1]
            await stepsStore.setCurrentStepByID(nextStepID)
            const studentStore = useStudentStore()
            studentStore.currentStep = this.currentStep
            studentStore.responseMessage = ""
        },

        addLearningRecord(analysis) {
            console.log('From store student.js')
            console.log(analysis)

            if (analysis.CorrectRate == 1) {
               this.finishCurrentStep()
               this.responseMessage = "You are correct! You use time" + analysis.Time
            } else {
               this.responseMessage = analysis.Key
            }
        }
    }
});
