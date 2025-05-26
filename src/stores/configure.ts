import {defineStore} from "pinia";
import {ref} from "vue";
import {useI18n} from "vue-i18n";

export const useConfigureStore = defineStore('configure', () => {
    const {locale} = useI18n();
    const menu = ref<boolean>(false)
    const trans = "transition-all duration-500 ease-in"

    const checkLang = () => {
        if (localStorage.getItem('lang')) {
            locale.value = localStorage.getItem('lang') as string;
            return ;
        }
        if ( navigator.language.includes('el')) {
            locale.value = 'el';
            localStorage.setItem('lang', 'el');
        } else {
            locale.value = 'en';
            localStorage.setItem('lang', 'en')
        }

    }

    //Setting language if user change it manually
    const setLan = () => {
        localStorage.setItem('lang', locale.value);
    }

    return {menu, trans, setLan, checkLang}
})