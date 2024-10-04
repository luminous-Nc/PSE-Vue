import {defineStore} from 'pinia';
import {useRoute} from "vue-router";
import {useStudentStore} from "@/stores/student.js";
const apiBaseUrl = import.meta.env.VITE_APP_BASE_PATH;
export const useTopicsStore = defineStore('topics', {
    state: () => {
        return {
            topics: [],
        }
    },
    actions: {
        async downloadTopics() {
            if (!this.topics.length) {
                console.log('Downloading topics...')
                try {
                    const response = await fetch(`${apiBaseUrl}/assets/database/topic.json`);
                    const data = await response.json();
                    this.topics = data.topics;
                    console.log('Downloaded store topics')
                } catch (error) {
                    console.error('Error loading database:', error);
                }
            }
        },

        async decideCurrentTopic() {
            const {query} = useRoute()
            const topicId = query.id;
            console.log('[decideCurrentTopic] Get topic ID from route Id =', topicId)

            if (!this.topics.length) {
                console.log('topics not downloaded')
                await this.downloadTopics()
            }
            return this.topics.find(t => t.id === parseInt(topicId, 10)) || {};
        }
    },
    getters: {
        getAllTopics(state) {
            if (!state.topics.length) {
                console.log('[allLocalTopics] Topics are empty, fetching topics...');
                state.downloadTopics();
            }
            return state.topics;
        },
    }
});
