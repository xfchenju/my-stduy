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
        var a = this.climbStairs(0);
        console.log(a, '爬楼梯')
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
        }
    }
}

</script>
<style lang="less">
    
</style>