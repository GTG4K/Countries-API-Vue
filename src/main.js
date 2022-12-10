import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';
import store from './store/index.js';

// Import components
import LoadingSpinner from './components/UI/LoadingSpinner.vue';

const app = createApp(App);
app.component('loading-spinner', LoadingSpinner);
app.use(router);
app.use(store);
app.mount('#app');
