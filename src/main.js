import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:5000";

createApp(App).mount('#app')
