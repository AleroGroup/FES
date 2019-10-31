import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Team from './views/Team.vue'
import Contact from './views/Contact.vue'


//about page
import Journey from './views/motivation/Journey.vue'
import Crucible from './views/motivation/Crucible.vue'
import ConceptDesign from './views/motivation/ConceptDesign.vue'
import Services from './views/services/index.vue'


Vue.use(Router)
Vue.use(VueHead)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    
    /* Dynamically routing the components */
    {
      path: '/services/to-graduate-students-researchers',
      name: 'services',
      component: () => import('./views/services/GraduateStud.vue')
    },
    {
      path: '/services/to-teachers-librarians-and-faculty',
      name: 'services',
      component: () => import('./views/services/TeachersLib.vue')
    },
    {
      path: '/services/to-school-administrators-and-staff',
      name: 'services',
      component: () => import('./views/services/SchoolAdmin.vue')
    },
    {
      path: '/services/to-business-owners',
      name: 'services',
      component: () => import('./views/services/BusinessOwn.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/about/journey',
      name: 'journey',
      component: Journey
    },
    {
      path: '/about/crucible',
      name: 'crucible',
      component: Crucible
    },
    {
      path: '/about/conceptdesign',
      name: 'conceptdesign',
      component: ConceptDesign
    },


    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
