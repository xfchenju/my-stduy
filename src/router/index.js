import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Leetcode from '@/components/leetcode/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Leetcode',
      component: Leetcode
    },
    {
    	path: '/leetcode',
    	name: Leetcode,
    	component: Leetcode
    }
  ]
})
