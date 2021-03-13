<template>
<div>
  <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no"> {{ checked }}</label>
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