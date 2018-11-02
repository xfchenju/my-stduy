import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Leetcode from '@/components/leetcode/index'
import LeetcodeArray from '@/components/leetcode/array'
import LeetcodeString from '@/components/leetcode/string'
import LeetcodeTree from '@/components/leetcode/tree'
import LeetcodeSort from '@/components/leetcode/sort'
import LeetcodeMath from '@/components/leetcode/math'
import LeetcodePlan from '@/components/leetcode/plan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Leetcode
    },
    {
    	path: '/leetcode',
    	name: 'Leetcode',
    	component: Leetcode,
      children: [
        {
          path: '/array',
          name: 'LeetcodeArray',
          component: LeetcodeArray
        },
        {
          path: '/string',
          name: 'LeetcodeString',
          component: LeetcodeString
        },
        {
          path: '/tree',
          name: 'LeetcodeTree',
          component: LeetcodeTree
        },
        {
          path: '/sort',
          name: 'LeetcodeSort',
          component: LeetcodeSort
        },
        {
          path: '/math',
          name: 'LeetcodeMath',
          component: LeetcodeMath
        },
        {
          path: '/plan',
          name: 'LeetcodePlan',
          component: LeetcodePlan
        }
      ]
    }
  ]
})
