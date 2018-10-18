<template>
    <div id="leetcode">
        <h4>26.删除排序数组中的重复项</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            removeDuplicates(nums) {
                var newArr = []
                for(var i = nums.length - 1; i >= 0 ; i--) {
                    if(newArr.length > 0) {
                        if(newArr.findIndex(n => n == nums[i]) > -1) {
                            nums.splice(i, 1);
                        }else {
                            newArr.push(nums[i]);
                        }
                    }else {
                        newArr.push(nums[i]);
                    }
                }
                return nums.length;
            }
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            removeDuplicates(nums) {
                if(nums.length == 0) return 0;
                var number = 0;
                for(var j = 0; j < nums.length; j++) {
                    if(nums[number] != nums[j]) {
                        number++;
                        nums[number] = nums[j];
                    }
                }
                return number + 1;
            }
            </vue-markdown>
        </div>
        <hr/>
        <h4>买卖股票的最佳时机 II</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            maxProfit(prices) {
                var buy = false;
                var money = 0;
                var buymoney = 0;
                for(var i = 0; i < prices.length; i++) {
                if(i < prices.length - 1) {
                    if(buy == false) {
                        if(prices[i] < prices[i + 1]) {
                            //console.log(prices[i], 'buy');
                            buy = true;
                            buymoney = prices[i];
                        }
                    }else {
                        if(prices[i] > prices[i + 1]) {
                            //console.log(prices[i], 'sale');
                            buy = false;
                            money += prices[i] - buymoney;
                        }
                    }
                }else {
                    if(buy) {
                        buy = false;
                        money += prices[i] - buymoney;
                    }
                }

                }
                return money;
            }
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            maxProfit(prices) {
                let profit = 0;
                for(let i = 1; i< prices.length; i+=1) {
                    if(prices[i] > prices[i - 1]) {
                        profit += prices[i] - prices[i - 1];
                    }
                }
                return profit;
            }
            </vue-markdown>
        </div>
        <hr/>
        <h4>旋转数组</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            rotate(nums, k) {
                if(k == 0 || nums.length == 0) {
                }else {
                    for(var j = 0; j < k; j++) {
                        for(var i = nums.length - 1; i >= 0; i--) {
                            if(i == (nums.length - 1)) {
                                var tmp = nums[i];
                            }else {  
                                nums[i + 1] = nums[i];
                            }
                        }
                        nums[0] = tmp;
                    } 
                }
                return nums;
            },
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            rotate(nums, k) {
                k = k % nums.length;
                nums.unshift(...nums.splice(-k, k));
                return nums;
            }
            </vue-markdown>
        </div>
        <hr/>
        <h4>存在重复元素</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var containsDuplicate = function(nums) {
                var newArr = {};
                for(var i in nums) {
                    if(newArr[nums[i]]) {
                        return true;
                    }else {
                        newArr[nums[i]] = 1;
                    }
                }
                return false;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var containsDuplicate = function(nums) {
                for(let i=1; i < nums.length;i++){
                   for(let j=i-1;j>=0;j--){
                       if(nums[i] > nums[j]){
                           break;
                       }else if(nums[i] == nums[j]){
                            return true;
                       }
                   }
                }
                return false;
            };
            </vue-markdown>
            <vue-markdown>
            var containsDuplicate = function(nums) {
                let obj = {};
                for(let i=0;i < nums.length;i++){
                    if(!obj[nums[i]]){
                        obj[nums[i]] = 1;
                    }else{
                        return true;
                    }
                }
                return false;
            };
            </vue-markdown>
        </div>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
export default {
    name: 'leetcode',
    data() {
        return {
        }
    },
    components: {
        'vue-markdown': VueMarkdown
    },
    created() {
        var a = this.removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
        var b = this.removeDuplicates1([0,0,1,1,1,2,2,3,3,4]);
        //console.log(a, b, '删除排序数组中的重复项');
        var c = this.maxProfit([7,1,5,3,6,4]);
        var d = this.maxProfit1([7,1,5,3,6,4]);
        //console.log(c, d, '买卖股票的最佳时机 II')
        var e = this.rotate([1,2,3,4,5,6,7], 3);
        var f = this.rotate1([1,2,3,4,5,6,7], 3);
        //console.log(e, f, '旋转数组');
        var g = this.singleNumber([4,1,2,1,2]);
        console.log(g, '只出现一次的数字')

    },
    methods: {
        // 26.删除排序数组中的重复项
        removeDuplicates(nums) {
            var newArr = []
            for(var i = nums.length - 1; i >= 0 ; i--) {
                if(newArr.length > 0) {
                    if(newArr.findIndex(n => n == nums[i]) > -1) {
                        nums.splice(i, 1);
                    }else {
                        newArr.push(nums[i]);
                    }
                }else {
                    newArr.push(nums[i]);
                }
            }
            return nums.length;
        },
        // 26更好解答（参考官方解答）
        removeDuplicates1(nums) {
            if(nums.length == 0) return 0;
            var number = 0;
            for(var j = 0; j < nums.length; j++) {
                if(nums[number] != nums[j]) {
                    number++;
                    nums[number] = nums[j];
                }
            }
            return number + 1;
        },
        // 买卖股票的最佳时机 II
        maxProfit(prices) {
            var buy = false;
            var money = 0;
            var buymoney = 0;
            for(var i = 0; i < prices.length; i++) {
                if(i < prices.length - 1) {
                    if(buy == false) {
                        if(prices[i] < prices[i + 1]) {
                            //console.log(prices[i], 'buy');
                            buy = true;
                            buymoney = prices[i];
                        }
                    }else {
                       if(prices[i] > prices[i + 1]) {
                              //console.log(prices[i], 'sale');
                           buy = false;
                           money += prices[i] - buymoney;
                       }
                    }
                }else {
                    if(buy) {
                        buy = false;
                        money += prices[i] - buymoney;
                    }
                }
                
            }
            return money;
        },
        // 更好解答
        maxProfit1(prices) {
            let profit = 0;
            for(let i = 1; i< prices.length; i+=1) {
                if(prices[i] > prices[i - 1]) {
                   profit += prices[i] - prices[i - 1];
                }
            }
            return profit;
        },
        // 旋转数组
        rotate(nums, k) {
            if(k == 0 || nums.length == 0) {
            }else {
                for(var j = 0; j < k; j++) {
                    for(var i = nums.length - 1; i >= 0; i--) {
                        if(i == (nums.length - 1)) {
                            var tmp = nums[i];
                        }else {  
                            nums[i + 1] = nums[i];
                        }
                    }
                    nums[0] = tmp;
                } 
            }
            return nums;
        },
        // 旋转数组
        rotate1(nums, k) {
            k = k % nums.length;
              nums.unshift(...nums.splice(-k, k));
              return nums;
        },
        singleNumber(nums) {
            for(var i = 0; i < nums.length; i++) {
            	var tmp = 0;
            	for(var j = nums.length -1; j >= 0; j--) {
            		if(nums[i] == nums[j] && i != j) {
            			tmp++;
            		}
            	}
            	if(tmp == 0) {
            		return nums[i];
            	}
            }
        }
    }
}

</script>
<style lang="less">
    
</style>