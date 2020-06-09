import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
