// src/stores/phase.js
import { defineStore } from 'pinia';
import { useTopicsStore } from './topic';


export const usePhaseStore = defineStore('phase', {
    state: () => ({
        phases: [],
        currentPhase: {}
    }),
    getters: {
        getCurrentPhase: (state) => state.currentPhase,
    },
    actions: {
        setCurrentPhase(phase) {
            this.currentPhase = phase;
        },
        async initPhase() {
            const topicsStore = useTopicsStore();
            await topicsStore.getCurrentTopic();
            const topic = topicsStore.currentTopic

            if (topic && topic.phases && topic.phases.length > 0) {
                console.log(this.phases)
                this.phases = topic.phases;
                this.setCurrentPhase(this.phases[0]);
            } else {
                console.error('Topic or phases not found');
            }
        },
        nextPhase() {
            const currentIndex = this.phases.indexOf(this.currentPhase);
            if (currentIndex >= 0 && currentIndex < this.phases.length - 1) {
                this.setCurrentPhase(this.phases[currentIndex + 1]);
            }
        },
        lastPhase() {
            const currentIndex = this.phases.indexOf(this.currentPhase);
            if (currentIndex > 0) {
                this.setCurrentPhase(this.phases[currentIndex - 1]);
            }
        }
    }
});
