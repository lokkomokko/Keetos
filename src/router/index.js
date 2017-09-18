import Vue from 'vue'
import Router from 'vue-router'
import root from '../App.vue'
import mainTemplate from '@/components/main'
import design from '@/components/design'
import project from '@/components/project'
import website from '@/components/website'


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
      path: '/design',
      name: 'design',
      components: {
        default: design,
      }
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/website',
      name: 'website',
      component: website
    },
             
  ]
})
