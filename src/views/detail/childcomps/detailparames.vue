<template>

<div class="parames-info" v-if="Object.keys(parames).length!==0">
  <!-- //首先判断对象里面有无值 -->
  <table v-for="(table,index) in parames.sizes" class="tables1"  :key="index">
    <tr v-for="(tables , index) in table" :key="index">
    <td v-for="(td , index) in tables" :key="index">{{td}}</td>
      </tr>
  </table>

  <table class="parames-info2">
  <tr  class="tr1" v-for="(tr2 ,index ) in parames.infos " :key="index">
  
   <td class="td1">{{tr2.key}}</td>
   <td class="td2">{{tr2.value}}</td>
  </tr>
  </table>
</div>
</template>

<script>
export default {
name:'detailparames',
props:{
  parames:Object,
  default(){
    return {}
  }
  
}
}
</script>

<style>

.parames-info{
 padding: 20px 15px;
 font-size: 14px;
 border-bottom: 5px solid #f2f5f8;
}
.tables1{
 border-bottom: 5px solid #f2f5f8;

}
/* .parames-info2{
  /* border-bottom: 5px solid #f2f5f8; */
/* }  */
.parames-info table{
 width: 100%;
 border-collapse: collapse;
}
.tables1 tr {
  height: 36px;
}
.tables1 td {
  padding: auto;
}
.tr1{
height: 30px;
}
.td1{
  width: 50px;
}
.td2{
  padding: 0 30px;
  color: red;
}
</style>