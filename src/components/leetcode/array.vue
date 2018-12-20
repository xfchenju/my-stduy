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
        <h4>只出现一次的数字</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
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
        <hr/>
        <h4>两个数组的交集 II</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var intersect = function(nums1, nums2) {
                var res = [];
                for(var i = 0; i < nums1.length; i++) {
                    var numIndex = nums2.findIndex(n => n == nums1[i]);
                    if(numIndex > -1) {
                        res.push(nums1[i]);
                        nums2.splice(numIndex, 1);
                    }
                }
                return res;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var intersect = function(nums1, nums2) {
                var nums3 = []
                nums1.forEach(num=>{
                    let index = nums2.indexOf(num)
                    if(!(index < 0)){
                        nums3.push(nums2.splice(index,1)[0])
                    }
                })
                return nums3
            };
            </vue-markdown>
        </div>
        <hr/>
        <h4>加一</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var plusOne = function(digits) {
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
                }else {
                    digits[digits.length - 1]++;
                }
                return digits;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            const plusOne = (digits) => {
              const len = digits.length;
              for (let i = len - 1; i >= 0; --i) {
                if (digits[i] < 9) {
                  ++digits[i];
                  return digits;
                }
                digits[i] = 0;
              }
              digits.unshift(1);
              return digits;
            };
            </vue-markdown>
        </div>
        <hr/>
        <h4>移动零</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var moveZeroes = function(nums) {
                for(var i = nums.length - 1; i >= 0; i--) {
                    if(nums[i] == 0) {
                        nums.splice(i, 1);
                        nums.push(0);
                    }
                }
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var moveZeroes = function (nums) {
                let index = 0;
                for (let i = 0; i < nums.length; i++) {
                    if (nums[i] !== 0) {
                        nums[index] = nums[i];
                        index++;
                    }
                }
                for (let i = index; i < nums.length; i++) {
                    nums[i] = 0;
                }
            };
            </vue-markdown>
        </div>
        <hr/>
        <h4>两数之和</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var twoSum = function(nums, target) {
                for(var i = 0; i < nums.length; i++) {
                    for(var j = nums.length - 1; j >= 0; j--) {
                        if((nums[i] + nums[j]) == target && i != j) {
                            return [i, j];
                        }
                    }
                }
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var twoSum = function(nums, target) {
                var l= nums.length;
                var n = {};
                for(var i = 0; i < l; ++i) {
                    if (n[target - nums[i]] !== undefined){
                        return [n[target-nums[i]], i];
                    }
                    n[nums[i]] = i;
                }
            };
            </vue-markdown>
        </div>
        <hr/>
        <h4>有效的数独</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var isValidSudoku = function(board) {
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
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var isValidSudoku = function(board) {
                var set ={};
                for(var i=1;i<= 9;i++) set[i]=[];
                
                for(var i=0;i < 9;i++){
                    for(var j=0;j < 9;j++){
                        var s=board[i][j];
                        if(Number(s)){
                            var index = parseInt(i/3)*3+parseInt(j/3);
                            for(var k=0;k < set[s].length;k++){
                                if(i==set[s][k][0]||j==set[s][k][1]||index==set[s][k][2])
                                    return false;
                            }
                            set[s].push([i,j,index]);
                        }
                    }
                }
                return true;
                
            };
            </vue-markdown>
        </div>
        <hr/>
        <h4>旋转图像</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var rotate = function(matrix) {
                var len = matrix.length;
                var arr = JSON.parse(JSON.stringify(matrix));
                for(var i = 0; i < len; i++) {
                    var len1 = matrix[i].length;
                    for(var j = 0; j < len1; j++) {
                        matrix[i][j] = arr[len1 - j - 1][i];
                    }
                }
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            let rotate = function(matrix) {
                let length = matrix.length - 1;
                for (let y = 0; y < length / 2; y++) {
                    for (let x = y; x < length - y; x++) {
                        let temp = matrix[y][x];
                        matrix[y][x] = matrix[length - x][y];
                        matrix[length - x][y] = matrix[length - y][length - x];
                        matrix[length - y][length - x] = matrix[x][length - y]
                        matrix[x][length - y] = temp; 
                    }
                }
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
        var str = '1920123';
        console.log(str.padStart(8, '0'), '字符串前补零');
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