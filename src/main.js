import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from "vue3-google-login";
const app = createApp(App);
app.use(vue3GoogleLogin, {
  clientId: "270560852902-uuvbchl3gd1qpvh79319qej35p8f5fjb.apps.googleusercontent.com",
});
app.use(router);
app.mount('#app')
