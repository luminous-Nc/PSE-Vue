import { defineStore } from 'pinia';
import {useRoute} from "vue-router";

export const useStepsStore = defineStore('steps', {
    state: () => ({
        steps: [],
        currentStep:{}
    }),
    actions: {
        async downloadSteps() {
            try {
                const response = await fetch('/assets/database/steps.json');
                const data = await response.json();
                this.steps = data.questions;
            } catch (error) {
                console.error('Error loading database:', error);
            }
        },

        async initQuestion(){
            console.log('Init Question')
            if (!this.questions.length) {
                await this.getAllQuestions()
            }
            const questionId = 1
            const question = this.questions.find(t => t.id === parseInt(questionId, 10));
            this.currentQuestion = question
        },

        async getCurrentTopic() {
            const route = useRoute();
            const topicId = route.query.id;

            console.log(topicId)

            if (!this.topics.length) {
                await this.downloadTopics()
            }

            const topic = this.topics.find(t => t.id === parseInt(topicId, 10));
            console.log(topic)
            this.currentTopic = topic
        }
    }
});