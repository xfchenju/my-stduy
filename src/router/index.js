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
import LeetcodeDesign from '@/components/leetcode/design'
import LeetcodeOther from '@/components/leetcode/other'

import LeetcodeArray2 from '@/components/leetcode/array2'

import Tencent from '@/components/leetcode/tencent'
import More from '@/components/leetcode/more'

import Index from '@/components/morePages/index'
import Index1 from '@/components/morePages/index1'
import Index2 from '@/components/morePages/index2'
import Index3 from '@/components/morePages/index3'

/*测试*/
// 二维码
import qrcode from '@/components/qrcode/qrcode'

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
        },
        {
          path: '/design',
          name: 'LeetcodeDesign',
          component: LeetcodeDesign
        },
        {
          path: '/other',
          name: 'LeetcodeOther',
          component: LeetcodeOther
        },
        {
          path: '/array2',
          name: 'LeetcodeArray2',
          component: LeetcodeArray2
        },
        {
          path: '/tencent',
          name: 'Tencent',
          component: Tencent
        },
        {
          path: '/more',
          name: 'More',
          component: More
        },
      ]
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: qrcode
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/AAA/index1',
          name: 'Index1',
          component: Index1
        },
        {
          path: '/index2',
          name: 'Index2',
          component: Index2
        },
        {
          path: '/index3',
          name: 'Index3',
          component: Index3
        }
      ]
    }
  ]
})
