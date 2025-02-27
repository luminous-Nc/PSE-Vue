import {defineStore} from 'pinia';

export const useMemoryStore = defineStore('memory', {
    state: () => {
        return {
           task:"",
        }
    },

    persist: {
        enabled: true,
    },

    actions: {

    },

    getters: {
    }
})
