<template>
  <input type="text" @keydown.tab.prevent="callTab" />
</template>
<script>
export default {
  name: "",
  components: [],
  data() {
    return {
      sampleData: "",
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    callTab() {
      console.log("tab event");
    },
  },
};
</script>
