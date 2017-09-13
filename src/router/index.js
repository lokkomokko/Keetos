import Vue from 'vue'
import Router from 'vue-router'
import root from '../App.vue'
import mainTemplate from '@/components/main'
import checkPage from '@/components/checkPage'
import checkPage2 from '@/components/checkPage2'


Vue.use(Router)

export default new Router({
 mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        default: mainTemplate,
      }
    },
    {
      path: '/page',
      name: 'checkPage',
      components: {
        default: checkPage,
      }
    },
    {
      path: '/page2',
      name: 'checkPage2',
      component: checkPage2
    },          
  ]
})
