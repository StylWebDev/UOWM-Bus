import {createI18n} from "vue-i18n";
import el_GR from  './locales/el_GR.json' with { type: "json" };
import en_US from  './locales/en_US.json' with { type: "json" };

export default createI18n({
    locale: 'el',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        el: el_GR,
        en: en_US
    }
})
