import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:8000/wp-json/wp/v2/'; // change this to website url when going into production

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created() {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true
    });
  }
}).$mount('#app')
