import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import FirstPage from '../components/FirstPage.vue'
import Work from '../components/Work.vue'
import Volunteer from '../components/Volunteer.vue'
import Education from '../components/Education.vue'
import Awards from '../components/Awards.vue'
import Certificate from '../components/Certificate.vue'
import Publications from '../components/Publications.vue'
import Skills from '../components/Skills.vue'
import Language from '../components/Language.vue'
import Interests from '../components/Interests.vue'
import References from '../components/References.vue'
import Projects from '../components/Projects.vue'
import CoverLetter from '../components/CoverLetter.vue'

Vue.use(VueRouter) 

const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/first',
    name: 'FirstPage',
    component: FirstPage
  },
  {
    path: '/second',
    name: 'Work',
    component: Work
  },
  {
    path: '/third',
    name: 'Volunteer',
    component: Volunteer
  },
  {
    path: '/fourth',
    name: 'Education',
    component: Education
  },
  {
    path: '/fifth',
    name: 'Awards',
    component: Awards
  },
  {
    path: '/sixth',
    name: 'Certificate',
    component: Certificate
  },
  {
    path: '/seven',
    name: 'Publications',
    component: Publications
  },
  {
    path: '/eight',
    name: 'SKills',
    component: Skills
  },
  {
    path: '/nine',
    name: 'Language',
    component: Language
  },
  {
    path: '/ten',
    name: 'Interests',
    component: Interests
  },
  {
    path: '/eleven',
    name: 'References',
    component: References
  },
  {
    path: '/twelve',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/thirteen',
    name: 'CoverLetter',
    component: CoverLetter
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
