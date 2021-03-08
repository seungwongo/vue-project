<template>
  <div></div>
</template>
<script>
export default {
 name: '', // 컴포넌트 이름
 components: {}, // 다른 컴포넌트 사용 시 컴포넌트를 import 하고, 배열로 저장
 data() { //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
   return {
     sampleData: ''
   };
 },
 setup() {}, //
 beforeCreate() {}, //컴포넌트가 생성되기 직전에 실행
  created() {}, //컴포넌트가 생성이 되면 실행
 beforeMount() {}, //template에 정의된 html 코드가 랜더링 되기 직전에 실행
 mounted() {}, //template에 정의된 html 코드가 랜더링 된 후 실행
 beforeUpdate() {}, //data의 변경이 일어났을 때, 변경된 데이터가 반영되어 re-rendering 되기 직전에 실행
 updated() {}, //data의 변경이 일어났을 때, 변경된 데이터가 반영되어 re-rendering 된 후 실행
 beforeUnmount(){}, //unmount() 메소드 호출 시 컴포넌트를 메모리에서 삭제하기 전에 실행
 unmounted() {}, //unmount가 완료된 후 실행
 methods: {} //컴포넌트내에서 사용할 메소드 정의
}
</script>
