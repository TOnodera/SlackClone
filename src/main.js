import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCbobrdb_YEx4xsQeCcQmdKZArSy302lWM',
  authDomain: 'vue-slack-clone-6853a.firebaseapp.com',
  databaseURL: 'https://vue-slack-clone-6853a.firebaseio.com',
  projectId: 'vue-slack-clone-6853a',
  storageBucket: 'vue-slack-clone-6853a.appspot.com',
  messagingSenderId: '494335862169',
  appId: '1:494335862169:web:3b464beefecaafc5699f08'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
