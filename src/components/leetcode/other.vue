<template>
    <div id="design">
        <h4>缺失数字</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var missingNumber = function(nums) {
                let n = Math.max(...nums);
                for(let i = 0; i < n; i++) {
                    if(!nums.includes(i)) {
                        return i;
                    }
                }
                return n + 1;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var missingNumber = function(nums) {
                let n = nums.length;
                let sum = n * (n + 1) / 2;
                for (let i = 0; i < nums.length; i++) {
                    sum -= nums[i];
                }
                return sum;
            };
            </vue-markdown>
        </div>
        <hr>
        <h4>缺失数字</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            generate(numRows) {
                if(numRows < 1) {
                    return 0;
                }else {
                    var lineArr = [];
                    lineArr.push([1]);
                }
                for(let i = 1; i < numRows; i++) {
                    var line = [];
                    for(let j = 0; j <= i ; j++) {
                        if(lineArr[i - 1]) {
                            var numLeft = lineArr[i - 1][j - 1] ? lineArr[i - 1][j - 1] : 0;
                            var numRight = lineArr[i - 1][j] ? lineArr[i - 1][j] : 0;
                            line.push(numLeft + numRight);
                        }else {
                            line.push(1)
                        }
                    }
                    lineArr.push(line);
                }
                return lineArr;
            }
            </vue-markdown>
        </div>
        <div>
            <label>差不多的解答：</label>
            <vue-markdown>
            var generate = function(numRows) {
               
                let arr = []
                for(let i = 0; i < numRows; i++){
                    let length = i + 1
                    let subArr = new Array(length)
                    subArr[0] = 1
                    subArr[length - 1] = 1
                    arr.push(subArr)
                }
                
                for(let index = 1;index < numRows;index++){
                  arr.forEach((subArr,i)=>{
                    if(i>index){
                      let last_arr = arr[i-1]
                      let last_1 = last_arr[index-1]
                      let last_2 = last_arr[index]
                      subArr[index] = last_1 + last_2
                    }
                  })
                }
              return arr         
            };
            </vue-markdown>
        </div>
        <hr>
        <h4>有效的括号</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var isValid = function(s) {
                var obj = {
                    '}' : '{',
                    ']' : '[',
                    ')' : '(',
                }
                var arr = [];
                for(let i = 0; i < s.length; i++) {
                    let str = s.charAt(i);
                    if(i == 0 && (str == ')' || str == '}' || str == ']')) {
                        return false;
                    }

                    if(str == '(' || str == '{' || str == '[') {
                        arr.push(str);
                    }

                    if(str == ')' || str == '}' || str == ']') {
                        if(arr.pop() != obj[str]) {
                            return false
                        }
                    }
                }
                if(arr.length > 0) {
                    return false;
                }
                return true;
            };
            // 修改后
            var isValid = function(s) {
                var obj = {
                    '}' : '{',
                    ']' : '[',
                    ')' : '(',
                }
                var arr = [];
                for(let i = 0; i < s.length; i++) {
                    let str = s.charAt(i);
                    if(str == '(' || str == '{' || str == '[') {
                        arr.push(str);
                    }else {
                       if(arr.pop() != obj[str]) {
                            return false
                        } 
                    }
                }
                
                return !arr.length;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var isValid = function(s) {
                let arr = [];
                for (var char of s) {
                    if (char==='(' || char=== '[' || char==='{') {
                        arr.unshift(char)
                    } else {
                        let popStr = arr.shift();
                        if (!popStr 
                            || popStr==='(' && char!==')' 
                            || popStr==='[' && char!== ']' 
                            || popStr==='{' && char!=='}') {
                            return false;
                        }
                    }
                }
                return !arr.length;
            };
            </vue-markdown>
        </div>
        <hr>
        <h4>颠倒二进制位</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            reverseBits(n) {
                var str = String(parseInt(n, 10).toString(2)).padStart(32, 0);
                var num = parseInt(str.split("").reverse().join(""), 2);
                return num;
            }
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            let reverseBits = function(n) {
                n = (n >>> 16) | (n << 16);
                n = (n >>> 8 & 0x00ff00ff) | (n << 8 & 0xff00ff00);
                n = (n >>> 4 & 0x0f0f0f0f) | (n << 4 & 0xf0f0f0f0);
                n = (n >>> 2 & 0x33333333) | (n << 2 & 0xcccccccc);
                n = (n >>> 1 & 0x55555555) | (n << 1 & 0xaaaaaaaa);
                return n >>> 0;
            };
            </vue-markdown>
        </div>
        <hr>
        <h4>位1的个数</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var hammingWeight = function(n) {
                var str = String(n.toString(2));
                var j = 0;
                for(let i = 0; i < str.length; i++) {
                    if(str[i] == 1) {
                        j++;
                    }
                }
                return j;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var hammingWeight = function(n) {
                return n.toString(2).replace(/[^1]/g,'').length
            };
            </vue-markdown>
        </div>
        <hr>
        <h4>汉明距离</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            // 未做出来
            
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            // 完全看不懂都
            var hammingDistance = function(x, y) {
                return ((x ^ y).toString(2).match(/1/g) || '').length;
            };
            
            let hammingDistance = function(x, y) {
                let count = 0;
                let z = x ^ y;
                while (z) {
                    if (z & 1) {
                        count++;
                    }
                    z = z >>> 1;
                }
                return count;
            };
            </vue-markdown>
        </div>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
export default {
    name: 'design',
    data() {
        return {
        }
    },
    components: {
        'vue-markdown': VueMarkdown
    },
    created() {
        // var a = this.missingNumber([0,1,2,3]);
        // console.log(a, '缺失数字')
        // var b = this.generate(5);
        // console.log(b, '帕斯卡三角形')
        // var c = this.isValid("{[]}");
        // console.log(c, '有效的括号'); 
        // var c = this.reverseBits(43261596);
        // console.log(c, '颠倒二进制位');  
        // var c = this.hammingWeight(11);
        // console.log(c, '位1的个数');
        var e = this.hammingDistance(93, 73);
        console.log(e, '汉明距离');  
    },
    methods: {
        missingNumber(nums) {
            let n = Math.max(...nums);
            for(let i = 0; i < n; i++) {
                if(!nums.includes(i)) {
                    return i;
                }
            }
            return n + 1;
        },
        generate(numRows) {
            let arr = []
            for(let i = 0; i<numRows; i++){
                let length = i + 1
                let subArr = new Array(length)
                subArr[0] = 1
                subArr[length - 1] = 1
                arr.push(subArr)
            }

            for(let index = 1;index< numRows;index++){
              arr.forEach((subArr,i)=>{
                console.log(subArr, i, index, 'asd')
                if(i>index){
                  let last_arr = arr[i-1]
                  let last_1 = last_arr[index-1]
                  let last_2 = last_arr[index]
                  subArr[index] = last_1 + last_2
                }
              })
            }
          return arr 
        },
        isValid(s) {
            var obj = {
                '}' : '{',
                ']' : '[',
                ')' : '(',
            }
            var arr = [];
            for(let i = 0; i < s.length; i++) {
                let str = s.charAt(i);
                if(i == 0 && (str == ')' || str == '}' || str == ']')) {
                    return false;
                }

                if(str == '(' || str == '{' || str == '[') {
                    arr.push(str);
                }

                if(str == ')' || str == '}' || str == ']') {
                    if(arr.pop() != obj[str]) {
                        return false
                    }
                }
            }
            return true;
        },
        reverseBits(n) {
            var str = String(parseInt(n, 10).toString(2)).padStart(32, 0);
            var num = parseInt(str.split("").reverse().join(""), 2);
            return num;
        },
        hammingWeight(n) {
            var str = String(n.toString(2));
            console.log(str, 'str')
            var j = 0;
            for(let i = 0; i < str.length; i++) {
                if(str[i] == 1) {
                    j++;
                }
            }
            return j;
        },
        hammingDistance(x, y) {
            var x2 = x.toString(2);
            var y2 = y.toString(2);
            console.log(y2, x2);
            return y2.length - x2.length;
        }
    }
}

</script>
<style lang="less">
    
</style> 