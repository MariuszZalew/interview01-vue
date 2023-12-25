import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../global.css'
// import 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/scss/_custom.scss'
import '@/assets/scss/_my_styles.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(store).use(router).mount('#app')
