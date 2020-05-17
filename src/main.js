import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'da', // set locale
  messages: {
    da: {
      hello: 'Hej med dig'
    },
    en: {
      hello: 'Hello good sir'
    }
   }, // set locale messages
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
