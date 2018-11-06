import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from "@/view/index"
import List from "@/view/list"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index',
      name: Index
    },{
      path:'/index',
      component:Index
    },{
      path:"/list",
      component:List
    }
  ]
})
