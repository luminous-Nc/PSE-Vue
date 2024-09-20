import {defineStore} from 'pinia';
import {useRoute} from "vue-router";
import {useTopicsStore} from "@/stores/topic.js";

export const useStepsStore = defineStore('steps', {
    state: () => {
        return {
                steps: [],
                currentStep: undefined
        }
    },
    actions: {
        async downloadSteps() {
            if (!this.steps.length) {
                console.log('Downloading steps')
                try {
                    const response = await fetch('/assets/database/steps.json');
                    const data = await response.json();
                    this.steps = data.steps;
                    console.log('Downloaded store steps')
                } catch (error) {
                    console.error('Error loading database:', error);
                }
            }
        },
        async decideCurrentStep() {
            if (!this.steps.length) {
                console.log('steps not downloaded')
                await this.downloadSteps()
            }

            const topicStore = useTopicsStore()
            const currentTopic = topicStore.getCurrentTopic

            console.log('start_step',currentTopic.start_step)
            this.currentStep = this.steps.find(t => t.id === parseInt(currentTopic.start_step, 10));
        }
    },

    getters: {
        getAllSteps(state) {
            if (!state.steps.length) {
                console.log('[allLocalSteps] Steps are empty, fetching steps...')
                this.downloadSteps()
            }
            return state.steps
        },

        getCurrentStep(state) {
            if (state.currentStep === undefined) {
                state.decideCurrentStep()
                return state.currentStep
            } else {
                return state.currentStep
            }
        }
    }
});
