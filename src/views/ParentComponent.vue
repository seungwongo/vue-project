<template>
  <child-component @send-message="sendMessage" ref="child_component" />
  <input type="text" ref="title" />
</template>
<script>
import ChildComponent from './ChildComponent';
export default {
  components: {ChildComponent},
  computed: {
    msg(){
      return this.$refs.child_component.msg;
    }
  },
  mounted() {
    this.$refs.child_component.$refs.btn.click();
  },
  methods: {
    sendMessage() {
      console.log(this.msg);
    },
    changeChildData() {
      // this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
      this.$refs.child_component.testFunc();
    }
  }
}
</script>