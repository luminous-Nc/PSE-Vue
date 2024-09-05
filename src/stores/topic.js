import { defineStore } from 'pinia';
import {useRoute} from "vue-router";

export const useTopicsStore = defineStore('topics', {
    state: () => ({
        topics: [],
        currentTopic:{}
    }),
    actions: {
        async getAllTopics() {
            console.log('getAllTopics')
            try {
                const response = await fetch('/assets/database/topic.json');
                const data = await response.json();
                this.topics = data.topics;
                console.log('store topics')
            } catch (error) {
                console.error('Error loading database:', error);
            }
        },

        async getCurrentTopic() {
            const route = useRoute();
            const topicId = route.query.id;

            console.log('Find topic ID from route',topicId)

            if (!this.topics.length) {
                console.log('topics not exist')
                await this.getAllTopics()
            }

            const topic = this.topics.find(t => t.id === parseInt(topicId, 10));
            console.log('getCurrentTopic',topic)
            this.currentTopic = topic
        }
    }
});