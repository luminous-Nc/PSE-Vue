import {defineStore} from 'pinia';

const apiBaseUrl = import.meta.env.VITE_APP_BASE_PATH_CASE;

export const useCaseStore = defineStore('caseStudy', {
    state: () => {
        return {
            current_case_study: null,
            current_module: 0,
            current_step: 0,
            module_array:[],
            step_array:[],
            allow_next_step:true,
            function_key_name:'start',
            show_function_button:false
        }
    },

    persist: {
        enabled: true,
    },

    actions: {
        async loadCaseStudy(caseID) {
            if (!this.current_case_study) {
                console.log(`Downloading case studies from ${apiBaseUrl}/assets/database/case_study.json`)
                try {
                    const response = await fetch(`${apiBaseUrl}/assets/database/case_study.json`);
                    const data = await response.json();
                    let targetCase = data.case_study.find(oneCase => oneCase.case_id === caseID);
                    if (targetCase) {
                        this.current_case_study = targetCase;
                        this.module_array = this.current_case_study.modules.map((module) => module.name);
                        this.step_array = this.current_case_study.modules.map(module => module.steps);
                    } else {
                        console.error(`Case study with ID ${caseID} not found.`);
                    }
                } catch (error) {
                    console.error('Error loading database:', error);
                }
            }

        },

        nextStep() {
            this.current_step += 1
            if (this.current_step > this.step_array[this.current_module].length - 1) { //If already the last step need to go to next module
                this.current_module += 1
                if (this.current_module > this.module_array.length - 1) {
                    this.current_module = this.module_array.length - 1
                    this.current_step -=1  //remain last module last step
                } else {
                    this.current_step = 0
                }
            }
        },

        lastStep() {
            this.current_step -= 1
            if (this.current_step < 0) {
                if (this.current_module === 0) {
                    this.current_step += 1 //remain first module first step
                } else {
                    this.current_module -= 1
                    this.current_step = this.step_array[this.current_module].length-1
                }

            }
        }
    },

    getters: {
        getModuleArray: (state) => state.module_array,
        getStepArray: (state) => state.step_array,
        // getCurrentStep:(state) => {
        //     console.log('module',state.current_module)
        //     console.log('step',state.current_step)
        //     console.log('stepArray',state.step_array.length)
        //     return state.step_array[state.current_module][state.current_step]
        // }
    }
})
