<template>
    <div id="plan">
        <h4>爬楼梯</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            test(n, m) {
                var res = n;
                while(n > m) {
                    n--;
                    res = res * n;
                }
                return res;
            },
            climbStairs(n) {
                var num = 0;
                for(var i = 0; i <= n; i++) {
                    for(var j = 0; j <= n / 2; j++) {
                        if(1 * i + 2 * j == n) {
                            if(i == 0 || j == 0) {
                                num++;
                            }else {
                                var m = Math.max(i, j);
                                var x = i + j; 
                                num = num + this.test(x, x - m + 1) / this.test(m, 1);
                            }
                        }
                    }
                }
                return num;
            }
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            let climbStairs = function(n) {
                if (n === 1) return 1;
                if (n === 2) return 2;
                let res = 0;
                let n1 = 1;
                let n2 = 2;
                for (let i = 3; i <= n; i++) {
                    res = n1 + n2;
                    n1 = n2;
                    n2 = res;
                }
                return res;
            };
            </vue-markdown>
        </div>
        <hr>
        <h4>买卖股票的最佳时机</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var maxProfit = function(prices) {
                var maxArr = [];
                for(let i = 0; i < prices.length - 1; i++) {
                    var arr = [];
                    for(let j = i + 1; j < prices.length; j++) {
                        if(prices[j] - prices[i] > 0) {  
                            arr.push(prices[j] - prices[i]);
                        }
                    }
                    if(arr.length > 0) {   
                        maxArr.push(Math.max(...arr));
                    }
                }
                return maxArr.length > 0 ? Math.max(...maxArr) : 0;
            };
            var maxProfit = function(prices) {
                let maxArr = 0;
                for(let i = 0; i < prices.length - 1; i++) {
                    for(let j = i + 1; j < prices.length; j++) {
                        if(prices[j] - prices[i] > 0) {  
                            maxArr = Math.max(maxArr, prices[j] - prices[i]);
                        }
                    }
                }
                return maxArr;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var maxProfit = function(prices) {
                var max = 0;
                var min = prices[0];
                for(var i = 1;i < prices.length;i++){
                    max = Math.max(max,prices[i] - min);
                    min = Math.min(min,prices[i]);
                }
                return max;
            };
            </vue-markdown>
        </div>
        <hr>
        <h4>最大子序和</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var maxSubArray = function(nums) {
                var maxSum = nums[0];
                for(let i = 0; i < nums.length; i++) {
                    var sum = 0;
                    for(let j = i; j < nums.length; j++) {
                        sum += nums[j];
                        if(sum > maxSum) {
                            maxSum = sum;
                        }
                    }
                }
                return maxSum;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            maxSubArray(nums) {
                let max = Number.MIN_SAFE_INTEGER;
                let sum = 0, i = 0;
                while(i< nums.length) {
                    sum += nums[i];
                    if (max < sum) {
                        max = sum;
                    }
                    if (sum < 0) {
                        sum = 0;
                    }
                    i++;
                }
                return max;
            }
            </vue-markdown>
        </div>
        <hr>
        <h4>打家劫舍</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
                没做出来
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            let rob = function(nums) {
                if (nums.length === 0) return 0;
                let dp = [0, nums[0]];
                for (let i = 1; i < nums.length; i++) {
                    dp[i+1] = Math.max(nums[i] + dp[i - 1], dp[i]);
                }
                return dp[nums.length];
            };
            </vue-markdown>
        </div>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
export default {
    name: 'plan',
    data() {
        return {
        }
    },
    components: {
        'vue-markdown': VueMarkdown
    },
    created() {
        //var a = this.climbStairs(0);
        //console.log(a, '爬楼梯')
        //var a = this.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
        //console.log(a, '最大子序和')
        var a = this.rob([2, 7, 9, 1, 1, 1]);
        console.log(a, '打家劫舍')
    },
    methods: {
        test(n, m) {
            var res = n;
            while(n > m) {
                n--;
                res = res * n;
            }
            return res;
        },
        climbStairs(n) {
            var num = 0;
            for(var i = 0; i <= n; i++) {
                for(var j = 0; j <= n / 2; j++) {
                    if(1 * i + 2 * j == n) {
                        if(i == 0 || j == 0) {
                            num++;
                        }else {
                            var m = Math.max(i, j);
                            var x = i + j; 
                            num = num + this.test(x, x - m + 1) / this.test(m, 1);
                        }
                    }
                }
            }
            return num;
        },
        maxSubArray(nums) {
            let max = Number.MIN_SAFE_INTEGER;
            let sum = 0, i = 0;
            while(i< nums.length) {
                sum += nums[i];
                if (max < sum) {
                    max = sum;
                }
                if (sum < 0) {
                    sum = 0;
                }
                i++;
            }
            return max;
        },
        rob(nums) { 
            var sum = 0;
            for(let i = 0; i < nums.length; i++) {

            }
            return sum;
        }
    }
}

</script>
<style lang="less">
    
</style>