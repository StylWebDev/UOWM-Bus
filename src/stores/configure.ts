import {defineStore} from "pinia";
import {ref} from "vue";

export const useConfigureStore = defineStore('configure', () => {
    const menu = ref<boolean>(false)

    return {menu}
})