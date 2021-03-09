<template>
  <h1>{{title}}</h1>
</template>

<script>
import { inject } from 'vue'; //inject 추가 

export default {
  setup() {
    const title = inject('title');  //inject를 사용해서 provide에서 정의한 키(key)로 데이터를 전달 받음

    return {title};
  }
}
</script>