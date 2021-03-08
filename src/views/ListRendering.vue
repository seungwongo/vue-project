<template>
<div>
  <button type="button" @click="getList">조회</button>
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송료</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(product,i) in productList">
        <td>{{product.product_name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.category}}</td>
        <td>{{product.delivery_price}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
// import {api} from '../common.js';
import ApiMixin from '../api.js';

export default {
 name: '',
 components: [],
 mixins: [ApiMixin],  //사용할 믹스인 파일을 배열로 등록
 data() {
   return {
      productList: []
   };
 },
 created() {
  //  this.getList();
 },
 mounted() {
   console.log('컴포넌트 mounted');
   //믹스인 mounted
   //컴포넌트 mounted
 },
 unmounted() {
    console.log('컴포넌트 unmounted');
  },
 methods: {
   async getList() {
     this.productList = await this.$api("https://ada1e106-f1b6-4ff2-be04-e311ecba599d.mock.pstmn.io/list","get");
   }
 }
}
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>