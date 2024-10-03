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
                this.learningPath = ["2.1", "2.2", "2.3", "2.4","2.5","3.1",
                    "3.2", "3.3", "4.1", "4.2", "4.3", "4.4", "4.5",
                    , "-99"];
            } else {
                console.log(this.learningStyle)
            }
        }
        ,
        setLearningStyle(learning_style) {
            this.learningStyle = learning_style
            useCookies(['learning_style']).set('learning_style', learning_style) // 默认值为 'null'
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

        finishComprehensiveTest(analysis) {
            let knowledgeLevel = ''
            let learnModule = analysis.LearnModule
            let modulesToCheckPLC = ['PLCInput', 'PLCOutput', 'ButtonStart', 'ButtonMotorStop']
            let modulesToCheckRobot = ['ABBRobot', '240VDC', '24VDC']
            let modulesToCheckPLCRobot = ['LSensor', 'Relay']

            let modulesToCheckPLCV2 =  [
                ["IN-2", "BTMSTPL"], ["IN-6", "LSL"], ["GNDPLCR", "24VN"],
                ["BTSTRR", "DC-0"], ["BTSTRR", "24VP"], ["BTMSTPR", "24VP"],
                ["LSR", "24VP"]
            ]

            let modulesToCheckRobotV2 = [["RLCU", "OUT-0"], ["RLCD", "24VN"],
                ["RLSWU", "240VP"], ["RLSWDR", "CVL"], ["CVR", "240VN"]
            ]

            let modulesToCheckPLCRobotV2 = [
                ["PWRDOL", "24VP"], ["GNDDOL", "24VN"], ["GNDDIL", "24VN"],
                ["DO02", "IN-7"], ["DI02", "OUT-1"]
              ]

            let modulesAlreadyPass = []

            let correctConnections = analysis.Correct
            for (let oneCorrect of correctConnections) {
                console.log(oneCorrect)
                modulesAlreadyPass.push(oneCorrect[2].Module)
            }

            function arraysContainSameElements(arr1, arr2) {
                return arr1.length === arr2.length && arr1.every(item => arr2.includes(item));
            }

            // 删除匹配的子数组
            function removeMatchingElements(arrayToCheck, targetArray) {
                // 遍历arrayToCheck中的每一个元素
                arrayToCheck.forEach(checkItem => {
                    // 查找并删除匹配的子数组
                    let index = targetArray.findIndex(item => arraysContainSameElements(item, checkItem));
                    if (index !== -1) {
                        targetArray.splice(index, 1); // 删除匹配的元素
                    }
                });
            }

            removeMatchingElements(modulesAlreadyPass, modulesToCheckPLCV2);
            removeMatchingElements(modulesAlreadyPass, modulesToCheckRobotV2);
            removeMatchingElements(modulesAlreadyPass, modulesToCheckPLCRobotV2);



            console.log(modulesToCheckPLCV2.length)
            console.log(modulesToCheckRobotV2.length)
            console.log(modulesToCheckPLCRobotV2.length)

            // const containsAnyPLC = modulesToCheckPLC.some(module => learnModule.includes(module));
            // const containsAnyRobot = modulesToCheckRobot.some(module => learnModule.includes(module));
            // const containsAnyPLCRobot = modulesToCheckPLCRobot.some(module => learnModule.includes(module));

            if (modulesToCheckPLCV2.length) {
                knowledgeLevel = 'plc'
            } else if (modulesToCheckRobotV2.length) {
                knowledgeLevel = 'robot'
            } else if (modulesToCheckPLCRobotV2.length) {
                knowledgeLevel = 'plcrobot'
            } else {
                knowledgeLevel = 'finish'
            }

            let newSteps = []
            switch (knowledgeLevel) {
                case "plc":
                    newSteps = ["2.1", "2.2", "2.3","2.4","2.5", "3.1", "3.2", "3.3", "4.1", "4.2", "4.3", "4.4", "4.5"]
                    this.responseMessage = "Your knowledge level is estimated to 'PLC'"
                    break
                case "robot":
                    newSteps = ["3.1", "3.2", "3.3", "4.1", "4.2", "4.3", "4.4", "4.5"]
                    this.responseMessage = "Your knowledge level is estimated to 'Robot'"
                    break
                case "plcrobot":
                    newSteps = ["4.1", "4.2", "4.3", "4.4", "4.5"]
                    this.responseMessage = "Your knowledge level is estimated to 'PLC and Robot'"
                    break
                case 'finish':
                    newSteps = []
                    this.responseMessage = "Your knowledge level is estimated to 'Finish"
                    break
            }
            this.addNewSteps(newSteps)
            this.finishCurrentStep()
        },


        addLearningRecord(analysis) {
            if (analysis.CorrectRate !== 1) {
                this.direction = 'previous'
                this.finishCurrentStep()
                this.responseMessage = "Incorrect. Learn again"
            } else {
                // this.responseMessage = analysis.Key
                this.direction = 'next'
                this.finishCurrentStep()
                this.responseMessage = "Correct! You use time " + calculateUseTime(analysis.Time) + " seconds!"
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

export const calculateUseTime = (timeArray) => {
    console.log(timeArray)
    let totalTime = 0
    for (let oneTime of timeArray) {
        console.log(oneTime)
        if (oneTime.indexOf('idle') !== -1) {
            totalTime += oneTime[4]
        }
    }
    return totalTime.toFixed(2)
}

