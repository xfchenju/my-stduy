<template>
    <div id="leetcode">
        <div>初级</div>
        <router-link to="/array">数组</router-link>
        <router-link to="/string">字符串</router-link>
        <router-link to="/tree">树</router-link>
        <router-link to="/sort">排序</router-link>
        <router-link to="/math">数学</router-link>
        <router-link to="/plan">动态规划</router-link>
        <router-link to="/design">设计问题</router-link>
        <router-link to="/other">其他</router-link>
        <div>中级</div>
        <router-link to="/array2">数组</router-link>
        <div>其他</div>
        <router-link to="/tencent">腾讯 2018 秋招精选（50 题）</router-link>
        <router-link to="/more">更多</router-link>
        <router-view></router-view>
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
        //console.log(g, '只出现一次的数字')
        var h = this.plusOne([9,9,9,9]);
        //console.log(h, '加一')
        var i = this.moveZeroes([0,1,0,3,12]);
        //console.log(i, '移动零')
        var j = this.twoSum([1,2,3,4,5], 9);
        //console.log(j, '两数之和')
        var k = this.isValidSudoku([
            [".",".",".",".","5",".",".","1","."],
            [".","4",".","3",".",".",".",".","."],
            [".",".",".",".",".","3",".",".","1"],
            ["8",".",".",".",".",".",".","2","."],
            [".",".","2",".","7",".",".",".","."],
            [".","1","5",".",".",".",".",".","."],
            [".",".",".",".",".","2",".",".","."],
            [".","2",".","9",".",".",".",".","."],
            [".",".","4",".",".",".",".",".","."]]);
        //console.log(k, '有效的数独')
        var l = this.rotate2([
          [1,2,3],
          [4,5,6],
          [7,8,9]
        ]);
        //console.log(l, '旋转图像');
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
        },
        plusOne(digits) {
            if(digits[digits.length - 1] == 9) {
                digits[digits.length - 1]++;
                for(var i = digits.length - 1; i >= 0; i--) {
                    if(digits[i] == 10) {
                        digits[i] = 0;
                        if(digits[i - 1]) {
                            digits[i - 1]++;
                        }else {
                            digits.splice(0, 0, 1);
                        }
                    }
                }
                return digits.join('');
            }else {
                digits[digits.length - 1]++;
                return digits.join('');
            }
        },
        moveZeroes(nums) {
            for(var i = nums.length - 1; i >= 0; i--) {
                if(nums[i] == 0) {
                    nums.splice(i, 1);
                    nums.push(0);
                }
            }
            return nums;
        },
        twoSum(nums, target) {
            var l= nums.length;
            var n = {};
            for(var i = 0; i < l; ++i) {
                if (n[target - nums[i]] !== undefined){
                    return [n[target-nums[i]], i];
                }
                n[nums[i]] = i;
            }
        },
        isValidSudoku(board) {
            var arr = {}
            var arr1 = {}
            for(var i = 0; i < board.length; i++) {
                var box = Math.floor(i / 3);
                if(!arr1[box]) {
                    arr1[box] = {}
                }
                for(var j = 0; j < board[i].length; j++) {
                    var box1 = Math.floor(j / 3);
                    if(!arr1[box][box1]) {
                        arr1[box][box1] = [];
                    }
                    arr1[box][box1].push(board[i][j]);
                    if(!arr[j]) {
                        arr[j] = {}
                    }
                    arr[j][i] = board[i][j];
                    for(var k = 0; k < board[i].length; k++) {
                        if(j != k && board[i][j] == board[i][k] && board[i][j] != '.') {
                            //console.log(board[i][j], 'board[i][j]')
                            return false;
                        }
                    }
                }
            }
            for(var i in arr) {
                for(var j in arr[i]) {
                    for(var k in arr[i]) {
                        if(j != k && arr[i][j] == arr[i][k] && arr[i][j] != '.') {
                            return false;
                        }
                    }
                }
            }
            for(var i in arr1) {
                //console.log(arr1[i])
                for(var j in arr1[i]) {
                    for(var k in arr1[i][j]){
                       for(var k1 in arr1[i][j]){
                           if(k != k1 && arr1[i][j][k] == arr1[i][j][k1] && arr1[i][j][k] != '.') {
                               return false;
                           }
                       } 
                    }
                }
            }
            return true;
        },
        rotate2(matrix) {
            var len = matrix.length;
            var arr = JSON.parse(JSON.stringify(matrix));
            for(var i = 0; i < len; i++) {
                var len1 = matrix[i].length;
                for(var j = 0; j < len1; j++) {
                    matrix[i][j] = arr[len1 - j - 1][i];
                }
            }
            return matrix;
        }
    }
}

</script>
<style lang="less">
    
</style>