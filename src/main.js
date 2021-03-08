import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'

const app = createApp(App)
// app.directive('focus', {
//   mounted(el) {
//     el.focus()
//   }
// })
app.use(router)
app.use(store)
app.mixin(mixins);
app.mount('#app')
window.Kakao.init("6172a93a1b48db422a48d784f5e7c4fd"); //발급 받은 앱키