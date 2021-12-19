import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import router from "./router";

let i18n = createI18n({
    legacy: false,
    locale: 'en',
    globalInjection: true,  
    messages
})

createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')
