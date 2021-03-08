<template>
<div></div>
</template>
<script>
export default {
  render(h) {
    return h('h'+this.level, {}, this.title);
  },
  props: {
    title: {
      type: String,
      default: '페이지 제목입니다.'
    },
    level: {
      type: Number,
      default: 1
    }
  }
}
</script>