
import Vue from 'vue';
import App from './App.vue';
import VueTelInput from './components/vue-tel-input.vue';

// import 'buefy/dist/buefy.css'

Vue.config.productionTip = false;

Vue.component('vue-tel-input', VueTelInput);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
