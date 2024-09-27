import {defineStore} from 'pinia';
import {useStepsStore} from "@/stores/step.js";
import {useCookies} from '@vueuse/integrations/useCookies';
import {useTopicsStore} from "@/stores/topic.js";

export const useStudentStore = defineStore('student', {
    state: () => {
        return {
            currentTopic: undefined,
            currentStep: undefined,
            currentStepFinished: false,
            learningPath: ["0"],
            learningStyle: "",
            learningRecord: {},
            responseMessage: '',
            direction: 'next'
        }
    },
    actions: {
        addNewSteps(newStepIdArray) {
            const index = this.learningPath.indexOf(this.currentStep.id);
            this.learningPath.splice(index + 1, 0, ...newStepIdArray);
        },
        initStudent() {
            console.log("init Student")
            const cookieValue = useCookies(['learning_style']).get('learning_style') || 'null'; // 默认值为 'null'
            this.learningStyle = cookieValue; // 更新 store 中的 learningStyle
        },
        initLearningPath() {
            console.log("init Learning Path")
            if (this.learningStyle === "Global") {
                this.learningPath = ["1.2", "-99"]
            } else if (this.learningStyle === "Sequential") {
                this.learningPath = ["1.1", "2.1", "2.2", "2.3", "2.4", "3.1", 
                                     "3.2", "3.3", "3.4", "4.1", "4.2", "4.3", 
                                     "4.4", "-99"];
            } else {
                console.log(this.learningStyle)
            }
        }
        ,
        setLearningStyle(learning_style) {
            this.learningStyle = learning_style
            const cookieValue = useCookies(['learning_style']).set('learning_style', learning_style) // 默认值为 'null'
        },
        finishCurrentStep() {
            this.currentStepFinished = true
        },

        nextStep() {
            const stepsStore = useStepsStore()
            const currentIndex = this.learningPath.indexOf(this.currentStep.id)
            const nextStepID = this.learningPath[currentIndex + 1]
            this.currentStep = stepsStore.getStepById(nextStepID)
            this.currentStepFinished = false
            this.responseMessage = ""
        },

        lastStep() {
            const stepsStore = useStepsStore()
            const currentIndex = this.learningPath.indexOf(this.currentStep.id)
            const lastStepID = this.learningPath[currentIndex - 1]
            this.currentStep = stepsStore.getStepById(lastStepID)
            this.currentStepFinished = false
            this.responseMessage = ""
        },
        continue() {
            if (this.currentStep.type !== "interactive") {
                this.direction = 'next'
            }
            if (this.direction === 'next') {
                this.nextStep()
            } else if (this.direction === 'previous') {
                this.lastStep()
            }
        },

        finishComprehensiveTest(knowledgeLevel) {
            console.log("add")
            let newSteps = []
            switch (knowledgeLevel) {
                case "plc":
                    newSteps = ["2.1", "2.2","2.3","2.4", "3.1", "3.2", "3.3","3.4","4.1", "4.2","4.3","4.4"]
                    break
                case "robot":
                    newSteps = [ "3.1", "3.2", "3.3","3.4","4.1", "4.2","4.3","4.4"]
                    break
                case "plcrobot":
                    newSteps = ["4.1", "4.2","4.3","4.4"]
                    break
            }
            this.addNewSteps(newSteps)
            this.finishCurrentStep()
        },

        addLearningRecord(analysis) {
            console.log('From store student.js')
            console.log(analysis)

            if (analysis.CorrectRate === 0) {
                this.direction = 'previous'
                this.finishCurrentStep()
                this.responseMessage = "Incorrect. Learn again"
                //todo define new steps to be added based on current level
            } else {
                // this.responseMessage = analysis.Key
                this.direction = 'next'
                this.finishCurrentStep()
                this.responseMessage = "You are correct! You use time" + analysis.Time
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
                topicStore.decideCurrentTopic().then((res) => {
                    state.currentTopic = res
                })
                return state.currentTopic
            } else {
                return state.currentTopic
            }
        }
    }
});
