import {
  createApp
} from 'vue'
import {
  createStore
} from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

const app = createApp({
  /* your root component */ })

// Install the store instance as a plugin
app.use(store);