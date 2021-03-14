<template>
  <input type="text" v-focus />
</template>
<script>
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
};
</script>
