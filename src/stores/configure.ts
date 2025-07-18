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

    const slides = ref([
        {id: 1, src: `bus1.webp`, alt: 'img'},
        {id: 2, src: `bus2.webp`, alt: 'img'},
        {id: 3, src: `bus3.webp`, alt: 'img'},
        {id: 4, src: `bus4.webp`, alt: 'img'},
        {id: 5, src: `bus5.webp`, alt: 'img'},
        {id: 6, src: `bus6.webp`, alt: 'img'},
        {id: 7, src: `bus7.webp`, alt: 'img'},
        {id: 8, src: `bus8.webp`, alt: 'img'}
    ])

    return {menu, trans, setLan, checkLang, slides}
})