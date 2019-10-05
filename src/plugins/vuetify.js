import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

// 기본 vuetify 설정
export default new Vuetify({
  icons: {
    iconfont: 'mdi' || 'fa',
  },
});
