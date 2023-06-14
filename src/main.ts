/* eslint-disable simple-import-sort/imports */
import TDesign from 'tdesign-vue-next';
import { createApp } from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';

import App from './App.vue';
import router from './router';
import { store } from './store';

import 'tdesign-vue-next/es/style/index.css';
import '@/style/index.less';
import './permission';
import 'animate.css';

library.add(faArrowAltCircleRight, faFontAwesome);

const app = createApp(App);

app.use(TDesign);
app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
