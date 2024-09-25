import {defineStore} from 'pinia';
import {useStepsStore} from "@/stores/step.js";
import { useCookies } from '@vueuse/integrations/useCookies';
import {useTopicsStore} from "@/stores/topic.js";

export const useStudentStore = defineStore('student', {
    state: () => {
        return {
            currentTopic: undefined,
            currentStep: undefined,
            currentStepFinished:false,
            learningPath:[0],
            learningStyle:"",
            learningRecord:{},
            responseMessage:''
        }
    },
    actions: {
        initStudent() {
            console.log("init Student")
          const cookieValue = useCookies(['learning_style']).get('learning_style') || 'null'; // 默认值为 'null'
          this.learningStyle = cookieValue; // 更新 store 中的 learningStyle
        },
        initLearningPath() {
            console.log("init Learning Path")
            if (this.learningStyle === "Global") {
                this.learningPath = [2, -99]
            }
            else if (this.learningStyle === "Sequential") {
                this.learningPath = [1, 3, 4, 5, 6, -99]
            }
            else {
                console.log(this.learningStyle)
            }
        }
        ,
        setLearningStyle(learning_style){
            this.learningStyle = learning_style
            const cookieValue = useCookies(['learning_style']).set('learning_style', learning_style) // 默认值为 'null'
        },
        finishCurrentStep() {
          this.currentStepFinished = true
        },

        async nextStep() {
            const stepsStore = useStepsStore()
            const currentIndex = this.learningPath.indexOf(this.currentStep.id)
            const nextStepID = this.learningPath[currentIndex + 1]
            this.currentStep = stepsStore.getStepById(nextStepID)
            this.currentStepFinished = false
            this.responseMessage = ""
        },

        async lastStep() {
            const stepsStore = useStepsStore()
            const currentIndex = this.learningPath.indexOf(this.currentStep.id)
            const lastStepID = this.learningPath[currentIndex - 1]
            this.currentStep = stepsStore.getStepById(lastStepID)
            this.currentStepFinished = false
            this.responseMessage = ""
        },

        async finishComprehensiveTest() {

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
        },
    },
    getters: {
        getCurrentStep(state) {
            if (state.currentStep === undefined) {
                console.log('getCurrentStep')
                const stepsStore = useStepsStore()
                this.currentStep = stepsStore.getStepById(state.learningPath[0])
                this.currentStepFinished = false
                this.responseMessage = ""
                return state.currentStep
            } else {
                return state.currentStep
            }
        },

        getCurrentTopic(state) {
            console.log(state.currentTopic)
            if (state.currentTopic === undefined) {
                console.log('decide in student topic')
                const topicStore = useTopicsStore()
                topicStore.decideCurrentTopic().then((res)=>{
                    state.currentTopic = res
                })
                return state.currentTopic
            } else {
                return state.currentTopic
            }
        }
    }
});
