<template>
<h1>{{msg}}</h1>
<button type="button" @click="childFunc" ref="btn">click</button>
</template>
<script>
export default {
  data() {
    return {
      msg: '자식 컴포넌트로부터 보내는 메시지'
    };
  },
  mounted() {
    // this.$emit('send-message', this.msg)
  },
  methods: {
    childFunc() {
      console.log('부모 컴포넌트에서 직접 발생시킨 이벤트');
      // this.msg = '자식 컴포넌트 데이터 변경';
      // this.$emit('send-message', this.msg);
    },
    testFunc() {
      console.log('testFunc');
    }
  }
}
</script>