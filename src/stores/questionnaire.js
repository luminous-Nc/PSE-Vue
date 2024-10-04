import { defineStore } from 'pinia';
import {useRoute} from "vue-router";
const apiBaseUrl = import.meta.env.VITE_APP_BASE_PATH;
export const useQuestionnaireStore = defineStore('questionnaire', {
    state: () => ({
        questions: [],
        answers:[],
    }),
    actions: {
        async downloadQuestions() {
            if (!this.questions.length) {
                console.log('Downloading questions')
                try {
                    const response = await fetch(`${apiBaseUrl}/assets/database/learning_style.json`);
                    const data = await response.json();
                    this.questions = data.questions;
                    console.log('Downloaded store questions')
                } catch (error) {
                    console.error('Error loading database:', error);
                }
            }
        },
    },

    getters: {
        getAllQuestions(state) {
            if (!state.questions.length) {
                console.log('[allLocalQuestions] Questions are empty, fetching questions...')
                this.downloadQuestions()
            }
            return state.questions
        },

        // getCurrentStep(state) {
        //     if (state.currentStep === undefined) {
        //         state.decideInitStep()
        //         return state.currentStep
        //     } else {
        //         return state.currentStep
        //     }
        // },

        // getStepById: (state) => {
        //     return function (id) {
        //         let targetStep = state.steps.find(step => step.id === parseInt(id, 10));
        //         return targetStep;
        //     }
        // }
    }
});
