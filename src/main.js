import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { languages } from './i18n'
import { defaultLocal } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'

const localStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages)
const i18n = createI18n ({
  legacy: false, // composition api or true for option api
  locale: localStorageLang || defaultLocal,
  fallbackLocale: 'en',
  messages
})

const app = createApp(App, {
  setup() {
    const {t} = useI18n()
    return {t}
  }
})

app.use(i18n).use(router).mount('#app')