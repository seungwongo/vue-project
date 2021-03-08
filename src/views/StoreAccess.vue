<template>
  <p>Count : {{count}}</p>
  <button type="button" @click="increment">Increment</button>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
     this.$store.commit('increment');
   }
  }
}
</script>