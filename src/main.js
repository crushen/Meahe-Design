import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  apolloProvider: createProvider(),

  created() {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true
    });
  }
}).$mount('#app')
