<template>
<div>
 <input type="text" v-model="textValue" />
 <button type="button" v-bind:disabled="textValue==''">Click</button>
</div>
</template>
<script>
export default {
data() {
  return {
    textValue: ""
  };
}
}
</script>