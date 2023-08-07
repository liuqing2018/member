import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import antd from 'ant-design-vue';

import router from './router/index';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());
app.use(antd);
app.use(router);
app.mount('#app');
