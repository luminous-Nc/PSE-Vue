import { defineStore } from 'pinia';
import {useRoute} from "vue-router";

export const useTopicsStore = defineStore('topics', {
    state: () => ({
        topics: [],
        currentTopic:{}
    }),
    actions: {
        async downloadTopics() {
            if (!this.topics.length) {
                console.log('Downloading topics...')
                try {
                    const response = await fetch('/assets/database/topic.json');
                    const data = await response.json();
                    this.topics = data.topics;
                    console.log('Downloaded store topics')
                } catch (error) {
                    console.error('Error loading database:', error);
                }
            }
            return this.topics
        },

        async getCurrentTopic() {
            const topic = this.topics.find(t => t.id === parseInt(topicId, 10));
            console.log('getCurrentTopic',topic)
            this.currentTopic = topic
        }
    },
    getters:{
        allLocalTopics(state) {
            if (!state.topics.length) {
                console.log('[allLocalTopics] Topics are empty, fetching topics...');
                this.downloadTopics();
            }
            return state.topics;
        },

        localCurrentTopic(state) {
            const route = useRoute();
            const topicId = route.query.id;
            console.log('[localCurrentTopics] Get topic ID from route Id =',topicId)

            if (!state.topics.length) {
                console.log('topics not downloaded')
                this.downloadTopics()
            }
            // 根据路由中的 topicId 返回对应的 topic
            return state.topics.find(t => t.id === parseInt(topicId, 10)) || {};
        }
    }
});
