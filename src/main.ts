import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {createPinia} from "pinia";
import i18n from './i18n'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';


const pinia = createPinia()

createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .use(pinia).use(router).use(i18n).mount('#app');
