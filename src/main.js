import Vue from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify'

import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

Vue.config.productionTip = false
const vuetify = new Vuetify();


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
