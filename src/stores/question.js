import { defineStore } from 'pinia';
import {useRoute} from "vue-router";

export const useQuestionsStore = defineStore('questions', {
    state: () => ({
        questions: [],
        currentQuestion:{}
    }),
    actions: {
        async getAllQuestions() {
            try {
                const response = await fetch('/assets/database/question.json');
                const data = await response.json();
                this.questions = data.questions;
            } catch (error) {
                console.error('Error loading database:', error);
            }
        },

        async initQuestion(){
            if (!this.questions.length) {
                await this.getAllQuestions()
            }
            const questionId = 1
            const question = this.questions.find(t => t.id === parseInt(questionId, 10));
            console.log(question)
            this.currentQuestion = question
        },

        async getCurrentTopic() {
            const route = useRoute();
            const topicId = route.query.id;

            console.log(topicId)

            if (!this.topics.length) {
                await this.getAllTopics()
            }

            const topic = this.topics.find(t => t.id === parseInt(topicId, 10));
            console.log(topic)
            this.currentTopic = topic
        }
    }
});