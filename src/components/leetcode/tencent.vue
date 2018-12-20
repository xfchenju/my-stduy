<template>
    <div id="tencent">
        <div v-for="item, index in data">
            <hr v-if="index != 0">
            <h4>{{index+1}}、{{item.title}}({{item.id}})</h4>
            <div v-if="!item.link">
                <div>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的解答：</label>
                    <vue-markdown>
                        {{item.myAnswer}}
                    </vue-markdown>
                </div>
                <div v-for="items in item.betterAnswer" v-if="item.betterAnswer && item.betterAnswer.length > 0">
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更好的解答：</label>
                    <vue-markdown>
                        {{items}}
                    </vue-markdown>
                </div>
            </div>
            <a href="javascript:;" @click="routerToPage(item.link)" v-else>查看</a>
        </div>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import { sortArrayByObjectItem } from '../../assets/public/utils.js'
export default {
    name: 'tencent',
    data() {
        return {
        data: [
            {
                id: '291',
                title: 'Nim游戏',
                level: '1',
                link: '',
                myAnswer: 
                    `var canWinNim = function(n) {
                        if(n % 4 == 0) {
                            return false;
                        }else {
                            return true;
                        }
                    };`,
                betterAnswer: [
                    `var canWinNim = function(n) {
                        return n % 4 !== 0
                    };`
                ]
            },{
                id: 344,
                title: '反转字符串',
                level: '1',
                link: 'string',
                myAnswer: ``,
                betterAnswer: []
            },{
                id: 136,
                title: '只出现一次的数字',
                level: '1',
                link: 'array',
                myAnswer: ``,
                betterAnswer: []
            },{
                id: 122,
                title: '买卖股票的最佳时机 II',
                level: '1',
                link: 'array',
                myAnswer: ``,
                betterAnswer: []
            },{
                id: 121,
                title: '买卖股票的最佳时机',
                level: '1',
                link: 'plan',
                myAnswer: ``,
                betterAnswer: []
            },{
                id: 217,
                title: '存在重复元素',
                level: '1',
                link: 'array',
                myAnswer: ``,
                betterAnswer: []
            },{
                id: 155,
                title: '最小栈',
                level: '1',
                link: 'design',
                myAnswer: ``,
                betterAnswer: []
            },{
                id: 70,
                title: '爬楼梯',
                level: '1',
                link: 'plan',
                myAnswer: ``,
                betterAnswer: []
            },{
                id: 104,
                title: '二叉树的最大深度',
                level: '1',
                link: 'tree',
                myAnswer: ``,
                betterAnswer: []
            },{
                id: 557,
                title: '反转字符串中的单词 III',
                level: '1',
                link: '',
                myAnswer: 
                    `var reverseWords = function(s) {
                        let arr = s.split(" ");
                        let newArr = [];
                        for(let i = 0; i < arr.length; i++) {
                            let arr1 = [];
                            for(let j = arr[i].length - 1; j >= 0; j--) {
                                arr1.push(arr[i].charAt(j));
                            }
                            newArr.push(arr1.join(""));
                        }
                        return newArr.join(" ");
                    };`,
                betterAnswer: [
                    `var reverseWords = function(s) {
                        let somes = s.split(" ");
                        let news = "";
                        for (let i = 0; i < somes.length; i++) {
                            let tmps = "";
                            for (let j = somes[i].length - 1; j >= 0; j--) {
                                tmps += somes[i][j];
                            }
                            news += (tmps + " ");
                        }
                        return news.substring(0, news.length - 1);
                    };`,
                ]
            },{
                id: 231,
                title: '2的幂',
                level: '1',
                link: '',
                myAnswer: 
                    `var isPowerOfTwo = function(n) {
                        if(n == 0) {
                            return false;
                        }
                        if(n == 1) {
                            return true;
                        }
                        if(n % 2 == 0) {
                            while(parseInt(n) == n && n != 1) {
                                n = n / 2;      
                            }  
                            if(n == 1) {
                                return true;
                            }else {
                                return false
                            }
                        }else {
                            return false;
                        }
                    };`,
                betterAnswer: [
                    `let isPowerOfTwo = function(n) {
                        return n > 0 && !(n & (n - 1));
                    };`,
                    `var isPowerOfTwo = function(n) {
                        while (n > 1) {
                            if (n % 2 == 0) {
                                n /= 2;
                            } else {
                                return false;
                            }
                        }
                        return n == 1;
                    };`
                ]
            },
        ] 
        }
    },
    components: {
        'vue-markdown': VueMarkdown
    },
    created() {
        // 排序
        //this.data = sortArrayByObjectItem(this.data);

        //let a = this.reverseWords('Let\'s take LeetCode contest');
        //console.log(a, '反转字符串中的单词 III');

        // let b = this.isPowerOfTwo(295147905179352830000);
        // console.log(b, '2的幂')
        
        // let c = this.generateMatrix(4);
        // console.log(c, '螺旋矩阵 II')

        // let d = this.subsets([1,2,3]);
        // console.log(d, '子集')

        let e = this.numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]);
        console.log(e, '独特的电子邮件地址')
    },
    methods: {
        routerToPage(path) {
            this.$router.push(path)
        },
        reverseWords(s) {
            let arr = s.split(" ");
            let newArr = [];
            for(let i = 0; i < arr.length; i++) {
                 let arr1 = [];
                for(let j = arr[i].length - 1; j >= 0; j--) {
                    arr1.push(arr[i].charAt(j));
                }
                newArr.push(arr1.join(""));
            }
            return newArr.join(" ");
        },
        isPowerOfTwo(n) {
            if(n == 0) {
                    return false;
                }
            if(n == 1) {
                return true;
            }
            if(n % 2 == 0) {
                var i = 0;
                while(parseInt(n) == n && n != 1) {
                    n = n / 2;      
                    i++;
                }  
                if(n == 1) {
                    return true;
                }else {
                    return false
                }
            }else {
                return false;
            }
        },
        generateMatrix(n) {
            var res = new Array(n);
            res.fill([]);
            var a = Math.ceil(n / 2);
            for(let i = 0; i < n; i++) {
                if(i == 0) {
                    res[i] = [];
                    for(let j = 1; j <= n; j++) {
                        res[i].push(j);
                    }
                }else if(i == n - 1) {
                    res[i] = [];
                    for(let j = 0; j < n; j++) {
                        res[i].unshift(2 * n - 1 + j);
                    }
                }else {
                    res[i] = [];
                    if(i <= (a - 1)) {
                        console.log('正向')
                        for(let j = 0; j < n; j++) {
                            res[i].push(4 * n - 4 + j);
                        }
                    }else {
                        console.log('反向')
                        for(let j = 0; j < n; j++) {
                            res[i].unshift(4 * n - 4 + j);
                        }
                    }
                }
            }
            return res;
        },
        subsets(nums) {
            let arr = [[], nums];
            for(let i = 0; i < nums.length; i++) {
                arr.push(nums[i]);
                for(let j = 0; j < nums.length; j++) {
                    
                }
            }
            console.log(arr, 'arr');
            return arr;
        },
        numUniqueEmails(emails) {
            var res = [];
            for(let i = 0; i < emails.length; i++) {
                var arr = emails[i].split('@');
                var arr1 = arr[0].split('+');
                var before = arr1[0].replace(/\./g, "");
                var email = before + '@' + arr[1];
                if(res.findIndex(n => n == email) < 0) {
                    res.push(email)
                }
            }
            return res.length;
        }
    }
}

</script>
<style lang="less">
    
</style>