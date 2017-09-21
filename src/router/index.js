import Vue from 'vue'
import Router from 'vue-router'
import root from '../App.vue'
import mainTemplate from '@/components/main'
import design from '@/components/design'
import project from '@/components/project'
import website from '@/components/website'


Vue.use(Router)


const scrollBehavior = (to, from, savedPosition) => {
  if (to.matched.some(m => m.meta.scrollToTop)) {
    return {x:0, y:0}
  }
}


export default new Router({
 mode: 'history',
  scrollBehavior,
  // saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        default: mainTemplate,
      },
      meta: { scrollToTop: true }
    },
    {
      path: '/design',
      name: 'design',
      components: {
        default: design,
      },
      // props: true
    },
   
    {
      path: '/design/project',
      name: 'project',
      component: project,
      meta: { scrollToTop: true }
    },
    {
      path: '/website',
      name: 'website',
      component: website,
      meta: { scrollToTop: true }
    },
             
  ]
})
