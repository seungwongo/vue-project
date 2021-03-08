<template>
<div></div>
</template>
<script>
export default {
  inject: ['itemLength'],
  mounted() {
    console.log(this.itemLength);
  }
}
</script>