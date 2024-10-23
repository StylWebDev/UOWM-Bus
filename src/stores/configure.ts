import {defineStore} from "pinia";
import {ref} from "vue";

export const useConfigureStore = defineStore('configure', () => {
    const test = ref<string>('test')

    return {test}
})