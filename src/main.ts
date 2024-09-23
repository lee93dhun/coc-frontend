import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BButton, BForm, BFormGroup, BFormInput, BFormSelect, BFormSelectOption, BFormSelectOptionGroup, BFormTextarea, BNav, BNavItem} from 'bootstrap-vue-next';
import { createPinia } from 'pinia';
import { useAuthStore } from './store/auth';

loadFonts()

const pinia = createPinia();

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .component('b-button', BButton)
  .component('b-form', BForm)
  .component('b-form-group',BFormGroup)
  .component('b-form-input',BFormInput)
  .component('b-select',BFormSelect)
  .component('b-nav', BNav)
  .component('b-nav-item', BNavItem)
  .component('b-textarea',BFormTextarea)
  .mount('#app')

const authStore = useAuthStore();
authStore.restoreLogin();

  
