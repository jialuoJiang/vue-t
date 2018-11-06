<template>
  <div>
      <ul>
        <li v-for="(item ,index ) in infos" :key="index"  :class="{'default-chose':index===selectIndex}" @click="selectFn(index)">{{item.title}}</li>
      </ul>
      <h4 v-for="(item,index) in infos" :key="index" v-show="index===selectIndex">{{item.content}}</h4>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      infos:[
        {title:"宫本武藏",content:"打游戏输的好惨"},
        {title:"天气",content:"雾霾很重，有些冷"},
        {title:"蓝色粉色",content:"想回家去"}
      ],
      chose:false,
      selectIndex:0
    };
  },
  created(){
    
  },
  methods: {
    selectFn(index){
        this.selectIndex=index||0;  
    }
  }
};
</script>
<style type="text/css" scoped>
li {
  width: 120px;
  padding: 10px 5px;
  display: inline-block;
  cursor: pointer;
}
.default-chose{
  border-bottom: 2px solid blue
}
</style>
