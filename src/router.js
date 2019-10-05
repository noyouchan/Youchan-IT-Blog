import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

// Pages
import Notice from './pages/NoticePage.vue'
import Calendar from './pages/CalendarPage.vue'
import Algorithm from './pages/AlgorithmPage.vue'
import Lab from './pages/LabPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    // Pages
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/algorithm',
      name: 'algorithm',
      component: Algorithm
    },
    {
      path: '/lab',
      name: 'lab',
      component: Lab
    }
  ]
})
