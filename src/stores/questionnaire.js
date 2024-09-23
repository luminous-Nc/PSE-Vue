import { defineStore } from 'pinia';
import {useRoute} from "vue-router";

export const useQuestionnaireStore = defineStore('questionnaire', {
    state: () => ({
        questions: [],
        answers:[]
    }),
    actions: {
        async getAllQuestions() {
            console.log('getAllQuestions from questionnaire')
            try {
                const response = await fetch('/assets/database/learning_style.json');
                const data = await response.json();
                this.questions = data.questions;
                console.log('store topics')
            } catch (error) {
                console.error('Error loading learning style database:', error);
            }
        }
    }
});
