// 聚焦元素
import Vue from "vue";
const focus=Vue.directive("focus",{
    inserted:function(el){
        el.focus()
    }
});

export default focus;