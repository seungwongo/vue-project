<template>
  <div>
    <button @click="show = !show">
      Toggle
    </button>

    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      show: true
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>