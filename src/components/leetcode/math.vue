<template>
    <div id="math">
        <h4>Fizz Buzz</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var fizzBuzz = function(n) {
                var arr = [];
                for(let i = 1; i <= n; i++) {
                    if(i % 3 == 0 && i % 5 != 0) {
                        arr.push('Fizz')
                    }else if(i % 3 != 0 && i % 5 == 0) {
                        arr.push('Buzz')  
                    }else if(i % 15 == 0) {
                        arr.push('FizzBuzz')  
                    }else {
                        arr.push(String(i));
                    }
                }
                return arr;
            };
            </vue-markdown>
        </div>
        <h4>计数质数</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var countPrimes = function(n) {
                let num = 0;
                if(n <= 2) {
                    return 0;
                }
                var k = true;
                for(let i = 2; i < n; i++) {
                    k = true;
                    for (let j = 2; j <= Math.sqrt(i); j++) {
                        if (i % j == 0){
                            k = false;
                        }
                        if(!k) {
                            break;
                        }
                    }
                    if(k) {
                        num++;
                    }
                }
                return num;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            // 先设置一个n长的数组其中所有元素都为true 下面循环判断 将所有i*j有值的设为false 如果元素还是true 说明其是质数
            var countPrimes = function(n) {
              const primes = Array(n).fill(true)
              let count = 0
              for (let i = 2; i < n; i++) {
                if (primes[i]) {
                  count++
                  for (let j = 2; i * j < n; j++) {
                    primes[i * j] = false
                  }
                }
              }
              return count     
            };
            // 类似的方法
            var countPrimes = function(n) {
                if(n<=2) return 0
                if(n<=3) return 1
                var count = 1
                var arr = new Array(n)
                for(var i = 3; i < n; i+=2) {
                    if(arr[i]) continue //如果arr[i]存在 调至下一轮循环
                    count++
                    for(var j = i; j < n; j = j + i) { //将所有不是质数的设置为true
                        arr[j] = true
                    }
                }
                return count
            };
            </vue-markdown>
        </div>
        <h4>3的幂</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var isPowerOfThree = function(n) {
                var i = 0;
                while(Math.pow(3, i) <= (n + 1)) {
                    if(Math.pow(3, i) == n) {
                        return true;
                    }
                    i++;
                }
                return false;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            let isPowerOfThree = function(n) {
                while (n > 1) {
                    n /= 3;
                }
                return n === 1;
            };
            </vue-markdown>
        </div>
        <h4>罗马数字转整数</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var romanToInt = function(s) {
                s = s.replace('IV', 'A');
                s = s.replace('IX', 'B');
                s = s.replace('XL', 'E');
                s = s.replace('XC', 'F');
                s = s.replace('CD', 'G');
                s = s.replace('CM', 'H');

                var numsArr = {
                    'A': 4,
                    'B': 9,
                    'E': 40,
                    'F': 90,
                    'G': 400,
                    'H': 900,
                    'I': 1,
                    'V': 5,
                    'X': 10,
                    'L': 50,
                    'C': 100,
                    'D': 500,
                    'M': 1000
                }
                var num = 0;
                for(var i = s.length - 1; i >= 0; i--) {
                    num = num + numsArr[s.charAt(i)];
                }
                return num;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            let romanToInt = function(s) {
                let map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
                let res = 0;
                let last = 0;
                for (let i = s.length - 1; i >= 0; i--) {
                    let curr = map[s.charAt(i)];   
                    if (curr < last) res -= curr;  //规律：左边比右边小的时候 表示要扣除左边的
                    else res += curr;
                    last = curr;
                }
                return res;
            }
            </vue-markdown>
        </div>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
export default {
    name: 'math',
    data() {
        return {
        }
    },
    components: {
        'vue-markdown': VueMarkdown
    },
    created() {
        //let a = this.countPrimes(999998);
        //console.log(a, '计数质数');
        //let b = this.isPowerOfThree(99);
        //console.log(b, '3的幂');
        let c = this.romanToInt('MCMXCIV');
        console.log(c, '罗马数字转整数');
    },
    methods: {
        countPrimes(n) {
            var sTime = new Date().getTime();
            let num = 0;
            if(n <= 2) {
                return 0;
            }
            var k = true;
            for(let i = 2; i < n; i++) {
                k = true;
                for (let j = 2; j <= Math.sqrt(i); j++) {
                    if (i % j == 0){
                        k = false;
                    }
                    if(!k) {
                        break;
                    }
                }
                if(k) {
                    //console.log(`${i}是质数，这是第${num}个质数`);
                    num++;
                }
            }
            var eTime = new Date().getTime();
            //console.log(eTime - sTime + '毫秒')
            return num;
        },
        isPowerOfThree(n) {
            var i = 0;
            while(Math.pow(3, i) <= (n + 1)) {
                console.log(i, 'i')
                if(Math.pow(3, i) == n) {
                    return true;
                }
                i++;
            }
            return false;
        },
        romanToInt(s) {
            s = s.replace('IV', 'A');
            s = s.replace('IX', 'B');
            s = s.replace('XL', 'E');
            s = s.replace('XC', 'F');
            s = s.replace('CD', 'G');
            s = s.replace('CM', 'H');

            var numsArr = {
                'A': 4,
                'B': 9,
                'E': 40,
                'F': 90,
                'G': 400,
                'H': 900,
                'I': 1,
                'V': 5,
                'X': 10,
                'L': 50,
                'C': 100,
                'D': 500,
                'M': 1000
            }
            var num = 0;
            for(var i = s.length - 1; i >= 0; i--) {
                num = num + numsArr[s.charAt(i)];
            }
            return num;
        }
    }
}

</script>
<style lang="less">
    
</style>