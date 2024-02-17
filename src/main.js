import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import VueKinesis from "vue-kinesis";
import Button from 'primevue/button';

import 'primevue/resources/themes/aura-light-green/theme.css';

const app = createApp(App)
app.component('ButtonButton', Button)
app.use(PrimeVue)
app.use(VueKinesis)
app.mount("#app")
