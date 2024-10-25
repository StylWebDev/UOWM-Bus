import {defineStore} from "pinia";
import {ref} from "vue";

export const useConfigureStore = defineStore('configure', () => {
    const menu = ref<boolean>(false)
    const trans = "transition-all duration-500 ease-in"

    return {menu, trans}
})