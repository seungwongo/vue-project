import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Examples from '../views/Examples.vue'
import ListRendering from '../views/ListRendering.vue'
import NestedComponent from '../views/NestedComponent.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/examples',
    name: 'Examples',
    component: Examples
  },
  {
    path: '/listrendering',
    name: 'ListRendering',
    component: ListRendering
  },
  {
    path: '/nested',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/composition',
    name: 'Composition API',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/CompositionAPI4.vue')
  },
  {
    path: '/provide',
    name: 'ProvideInject',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/ProvideInject.vue')
  },
  {
    path: '/parent',
    name: 'ParentComponent',
    component: () => import( /* webpackChunkName: "parent" */ '../views/ParentComponent.vue')
  },
  {
    path: '/transition',
    name: 'Transition',
    component: () => import( /* webpackChunkName: "parent" */ '../views/Transition.vue')
  },
  {
    path: '/kakaologin',
    name: 'KakaoLogin',
    component: () => import( /* webpackChunkName: "parent" */ '../views/KakaoLogin.vue')
  },
  {
    path: '/naverlogin',
    name: 'NaverLogin',
    component: () => import( /* webpackChunkName: "parent" */ '../views/NaverLogin.vue')
  },
  {
    path: '/googlelogin',
    name: 'GoogleLogin',
    component: () => import( /* webpackChunkName: "parent" */ '../views/GoogleLogin.vue')
  },
  {
    path: '/store',
    name: 'StoreAccess',
    component: () => import( /* webpackChunkName: "parent" */ '../views/StoreAccess.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingInputText.vue')
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingInputNumber.vue')
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingTextarea.vue')
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingSelect.vue')
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingCheckbox.vue')
  },
  {
    path: '/databindingcheckbox2',
    name: 'DataBindingCheckbox2',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingCheckbox2.vue')
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingRadio.vue')
  },
  {
    path: '/databindingattribue',
    name: 'DataBindingAttribue',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingAttribue.vue')
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingButton.vue')
  },
  {
    path: '/databindingclass',
    name: 'DataBindingClass',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingClass.vue')
  },
  {
    path: '/databindingclass2',
    name: 'DataBindingClass2',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingClass2.vue')
  },
  {
    path: '/databindingstyle',
    name: 'DataBindingStyle',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingStyle.vue')
  },
  {
    path: '/databindinglist',
    name: 'DataBindingList',
    component: () => import( /* webpackChunkName: "parent" */ '../views/DataBindingList.vue')
  },
  {
    path: '/renderingvif',
    name: 'RenderingVIf',
    component: () => import( /* webpackChunkName: "parent" */ '../views/RenderingVIf.vue')
  },
  {
    path: '/eventclick',
    name: 'EventClick',
    component: () => import( /* webpackChunkName: "parent" */ '../views/EventClick.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router