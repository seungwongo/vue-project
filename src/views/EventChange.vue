<template>
<select v-model="selectedValue" @change="changeSelect">
   <option value="서울">서울</option>
   <option value="부산">부산</option>
   <option value="제주">제주</option>
 </select>
</template>
<script>
export default {
 data() {
   return {
     selectedValue: ''
   };
  },
  methods: {
    changeSelect(){
      alert(this.selectedValue);
    }
  }
}
</script>