import { defineStore } from 'pinia'

export const hyyStore = defineStore("hyyStore", {
    state:() => { 
        return {
            list:["黄黄","小黄","黄小黄"]
        } 
    },
    getters: {
    },
    actions: {
    }
})
