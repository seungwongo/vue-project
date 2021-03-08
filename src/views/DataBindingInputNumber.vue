<template>
<div>
  <input type="number" v-model.number="numberModel" />
</div>
</template>
<script>
export default {
 data() {
   return {
     numberModel: 3
   };
 }
}
</script>
