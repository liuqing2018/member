import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import injectAntDComponents from './utils/injectAntDComponents';

import router from './router/index';
import { createPinia } from 'pinia';

const app = createApp(App);

injectAntDComponents(app);

app.use(createPinia());
app.use(router);
app.mount('#app');
