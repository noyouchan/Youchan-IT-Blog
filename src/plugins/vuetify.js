import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import '@fortawesome/fontawesome-free/css/all.css';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

// 기본 vuetify 설정
export default new Vuetify({
  icons: {
    iconfont: 'mdi' || 'fa',
  },
});
