<template>
<div>
    <table cellspacing="0" cellpadding="0" >
        <thead v-if="tableTitle && tableTitle.length>0">
            <tr>
                <th v-for="(m,j) in tableTitle.length" :key="j">{{tableTitle[m-1]}}</th>  
            </tr>
        </thead>
        <tbody v-if="data">
            <tr v-for="(item,index) in data" :key="index" v-if="data.length>0">  
              <td v-for="(item2,index2) in item" :key="index2">{{item2}}</td>
              <td v-if="gap>0" v-for="m in gap" :key="m">--</td>
            </tr>
            <tr v-if="data.length===0">
                <td>暂无数据</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>
<script>
import PaginationItem from "@/components/pagination";
export default {
  props: ["tableTitle", "data"],
  components:{
PaginationItem
  },
  data() {
    return {
gap:0,

    };
  },
  created() {
     const lenA=this.tableTitle.length,B=this.data[0]||{};
     var  lenB=0;
     for(var key in B){
         if(key){
             lenB++;
         }
     }
     this.gap=lenA-lenB;
  },
  mounted(){
  
  }
};
</script>
<style scoped>
</style>
