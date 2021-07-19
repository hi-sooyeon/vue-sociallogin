import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from "../blob/mixins";
import config from '@/config.yaml';

//const kakaokey = config.kakao.id;

const app = createApp(App)
app.use(router)
app.use(mixins)
app.mount('#app')

window.Kakao.init(config.kakaokey);