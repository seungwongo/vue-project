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
    path: '/provide',
    name: 'ProvideInject',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/ProvideInject.vue')
  },
  {
    path: '/kakaologin',
    name: 'KakaoLogin',
    component: () => import( /* webpackChunkName: "kakaologin" */ '../views/KakaoLogin.vue')
  },
  {
    path: '/login',
    name: 'KakaoLogin',
    component: () => import( /* webpackChunkName: "kakaologin" */ '../views/KakaoLogin.vue')
  },
  {
    path: '/naverlogin',
    name: 'NaverLogin',
    component: () => import( /* webpackChunkName: "naverlogin" */ '../views/NaverLogin.vue')
  },
  {
    path: '/googlelogin',
    name: 'GoogleLogin',
    component: () => import( /* webpackChunkName: "googlelogin" */ '../views/GoogleLogin.vue')
  },
  {
    path: '/store',
    name: 'StoreAccess',
    component: () => import( /* webpackChunkName: "store" */ '../views/StoreAccess.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBinding.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: () => import( /* webpackChunkName: "databindinginputtext" */ '../views/DataBindingInputText.vue')
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: () => import( /* webpackChunkName: "databindinginputnumber" */ '../views/DataBindingInputNumber.vue')
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: () => import( /* webpackChunkName: "databindingtextarea" */ '../views/DataBindingTextarea.vue')
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: () => import( /* webpackChunkName: "databindingselect" */ '../views/DataBindingSelect.vue')
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: () => import( /* webpackChunkName: "databindingcheckbox" */ '../views/DataBindingCheckbox.vue')
  },
  {
    path: '/databindingcheckbox2',
    name: 'DataBindingCheckbox2',
    component: () => import( /* webpackChunkName: "databindingcheckbox2" */ '../views/DataBindingCheckbox2.vue')
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: () => import( /* webpackChunkName: "databindingradio" */ '../views/DataBindingRadio.vue')
  },
  {
    path: '/databindingattribute',
    name: 'DataBindingAttribute',
    component: () => import( /* webpackChunkName: "databindingattribue" */ '../views/DataBindingAttribute.vue')
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: () => import( /* webpackChunkName: "databindingbutton" */ '../views/DataBindingButton.vue')
  },
  {
    path: '/databindingclass',
    name: 'DataBindingClass',
    component: () => import( /* webpackChunkName: "databindingclass" */ '../views/DataBindingClass.vue')
  },
  {
    path: '/databindingclass2',
    name: 'DataBindingClass2',
    component: () => import( /* webpackChunkName: "databindingclass2" */ '../views/DataBindingClass2.vue')
  },
  {
    path: '/databindingstyle',
    name: 'DataBindingStyle',
    component: () => import( /* webpackChunkName: "databindingstyle" */ '../views/DataBindingStyle.vue')
  },
  {
    path: '/databindinglist',
    name: 'DataBindingList',
    component: () => import( /* webpackChunkName: "databindinglist" */ '../views/DataBindingList.vue')
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: () => import( /* webpackChunkName: "databindinglist2" */ '../views/DataBindingList2.vue')
  },
  {
    path: '/renderingvif',
    name: 'RenderingVIf',
    component: () => import( /* webpackChunkName: "renderingvif" */ '../views/RenderingVIf.vue')
  },
  {
    path: '/eventclick',
    name: 'EventClick',
    component: () => import( /* webpackChunkName: "eventclick" */ '../views/EventClick.vue')
  },
  {
    path: '/eventchange',
    name: 'EventChange',
    component: () => import( /* webpackChunkName: "eventchange" */ '../views/EventChange.vue')
  },
  {
    path: '/eventbinding',
    name: 'EventBinding',
    component: () => import( /* webpackChunkName: "eventbinding" */ '../views/EventBinding.vue')
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import( /* webpackChunkName: "computed" */ '../views/Computed.vue')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import( /* webpackChunkName: "watch" */ '../views/Watch.vue')
  },
  {
    path: '/watch2',
    name: 'Watch2',
    component: () => import( /* webpackChunkName: "watch2" */ '../views/Watch2.vue')
  },
  {
    path: '/parent',
    name: 'ParentComponent',
    component: () => import( /* webpackChunkName: "parent" */ '../views/ParentComponent.vue')
  },
  {
    path: '/parent2',
    name: 'ParentComponent2',
    component: () => import( /* webpackChunkName: "parent2" */ '../views/ParentComponent2.vue')
  },
  {
    path: '/parent3',
    name: 'ParentComponent3',
    component: () => import( /* webpackChunkName: "parent3" */ '../views/ParentComponent3.vue')
  },
  {
    path: '/parent4',
    name: 'ParentComponent4',
    component: () => import( /* webpackChunkName: "parent4" */ '../views/ParentComponent4.vue')
  },
  {
    path: '/parent5',
    name: 'ParentComponent5',
    component: () => import( /* webpackChunkName: "parent5" */ '../views/ParentComponent5.vue')
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import( /* webpackChunkName: "slot" */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import( /* webpackChunkName: "calculator" */ '../views/Calculator.vue')
  },
  {
    path: '/composition',
    name: 'Composition API',
    component: () => import( /* webpackChunkName: "composition" */ '../views/CompositionAPI.vue')
  },
  {
    path: '/composition2',
    name: 'Composition API',
    component: () => import( /* webpackChunkName: "composition2" */ '../views/CompositionAPI2.vue')
  },
  {
    path: '/composition3',
    name: 'Composition API',
    component: () => import( /* webpackChunkName: "composition3" */ '../views/CompositionAPI3.vue')
  },
  {
    path: '/composition4',
    name: 'Composition API',
    component: () => import( /* webpackChunkName: "composition4" */ '../views/CompositionAPI4.vue')
  },
  {
    path: '/composition_provide',
    name: 'Composition API Provide',
    component: () => import( /* webpackChunkName: "composition_provide" */ '../views/CompositionAPIProvide.vue')
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: () => import( /* webpackChunkName: "composition_provide" */ '../views/CustomDirective.vue')
  },
  {
    path: '/mixins',
    name: 'Mixins',
    component: () => import( /* webpackChunkName: "mixins" */ '../views/Mixins.vue')
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: () => import( /* webpackChunkName: "plugins" */ '../views/Plugins.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router