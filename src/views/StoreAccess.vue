<template>
  <p>Count : {{count}}</p>
  <p>cartCount : {{cartCount}}</p>
  <button type="button" @click="increment">Increment</button>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    cartCount() {
      return this.$store.getters.cartCount;
    }
  },
  methods: {
    increment() {
     this.$store.commit('increment');
   }
  }
}
</script>