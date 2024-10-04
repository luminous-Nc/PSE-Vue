import {defineStore} from 'pinia';
import {useRoute} from "vue-router";
import {useTopicsStore} from "@/stores/topic.js";
import {useStudentStore} from "@/stores/student.js";
const apiBaseUrl = import.meta.env.VITE_APP_BASE_PATH;
export const useStepsStore = defineStore('steps', {
    state: () => {
        return {
                steps: [],
        }
    },
    actions: {
        async downloadSteps() {
            if (!this.steps.length) {
                // console.log('Downloading steps')
                try {
                    const response = await fetch(`${apiBaseUrl}/assets/database/steps.json`);
                    const data = await response.json();
                    this.steps = data.steps;
                    // console.log('Downloaded store steps')
                } catch (error) {
                    // console.error('Error loading database:', error);
                }
            }
        },
    },

    getters: {
        getAllSteps(state) {
            if (!state.steps.length) {
                console.log('[allLocalSteps] Steps are empty, fetching steps...')
                this.downloadSteps()
            }
            return state.steps
        },

        getStepById: (state) => {
            return function (id) {
                if (!state.steps.length) {
                    // console.log('[allLocalTopics] Topics are empty, fetching topics...');
                    state.downloadSteps();
                }
                let targetStep = state.steps.find(step => step.id === id);
                return targetStep;
            }
        }
    }
});
