import { createI18n } from 'vue-i18n'
import store from '@/store'
import ZhLocale from './lang/zh'
import ENLocale from './lang/en'
const messages = {
  en: {
    msg: {
      ...ENLocale
    }
  },
  zh: {
    msg: {
      ...ZhLocale
    }
  }
}
/**
 * 返回当前 lang
 */
function getLanguage() {
  return store && store.getters && store.getters.language
}
const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
