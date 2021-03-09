<template>
  <div>
    <h2>{{ i18n.ko.hi }}</h2>
  </div>
</template>

<script>
  export default {
    inject: ['i18n'],
    mounted(){
      console.log(this.i18n);
    }
  };
</script>