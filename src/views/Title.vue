<template>
  <h1 v-if="level==1">{{title}}</h1>
  <h2 v-if="level==2">{{title}}</h2>
  <h3 v-if="level==3">{{title}}</h3>
  <h4 v-if="level==4">{{title}}</h4>
  <h5 v-if="level==5">{{title}}</h5>
</template>
<script>
export default {
  name: 'title',
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