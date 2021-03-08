<template>
<div>
  <label><input type="checkbox" v-model="checked"> {{ checked }}</label>
</div>
</template>
<script>
export default {
 data() {
   return {
     checked: true
   };
 }
}
</script>