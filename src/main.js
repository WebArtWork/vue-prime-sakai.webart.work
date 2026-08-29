import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@wawjs/css-prime-themes/aura';
import PrimeVue from '@wawjs/vue-prime/config';
import ConfirmationService from '@wawjs/vue-prime/confirmationservice';
import ToastService from '@wawjs/vue-prime/toastservice';

import '@/assets/tailwind.css';
import '@/assets/styles.scss';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');
