<template>
  <CompositionAPIInject />
</template>

<script>
import { provide } from 'vue';
import CompositionAPIInject from './CompositionAPIInject';

export default {
  components: {
    CompositionAPIInject
  },
  setup() {
    provide('title', 'Vue.js 프로젝트')
  }
}
</script>