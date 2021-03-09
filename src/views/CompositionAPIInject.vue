<template>
  <h1>{{title}}</h1>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const title = inject('title');

    return {title};
  }
}
</script>