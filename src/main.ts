import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BButton, BFormInput, BNav, BNavItem} from 'bootstrap-vue-next';
// import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import { createBootstrap } from 'bootstrap-vue-next';

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  // .use(createBootstrap())
  .component('b-button', BButton)
  .component('b-form-input',BFormInput)
  .component('b-nav', BNav)
  .component('b-nav-item', BNavItem)
  .mount('#app')

  
