<template>
    <div id="leetcode">
        <h4>合并两个有序数组</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var merge = function(nums1, m, nums2, n) {
                for(var i = 0; i < nums1.length; i++) {
                    if(i < m) {
                        
                    }else if(i >= m && i < (m + n)) {
                        nums1[i] = nums2[i - m];
                    }else {
                        nums1.splice(i, 1);
                    }
                }
                nums1.sort(function(a,b){return a-b;})
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            let merge = function(nums1, m, nums2, n) {
                let i = m - 1;
                let j = n - 1;
                while(i >= 0 || j >= 0) {
                    if (nums1[i] >= nums2[j] || j < 0) {
                        nums1[i + j + 1] = nums1[i];
                        i--;
                    } else {
                        nums1[i + j + 1] = nums2[j];
                        j--;
                    }
                }
            };
            </vue-markdown>
        </div>
        <h4>第一个错误的版本</h4>
        <div>
            <label>我的解答：(二分法)</label>
            <vue-markdown>
            let low = 0;
            let high = n;
            let href = null;
            while(low != high) {
                if(isBadVersion(low) && !isBadVersion(low - 1)) {
                    return low;
                }
                if(isBadVersion(high) && !isBadVersion(high - 1)) {
                    return high;
                }
                href = Math.ceil((high + low) / 2);
                if(isBadVersion(href) && !isBadVersion(href - 1)) {
                    return href;
                }else {
                    if(isBadVersion(href)) {
                        high = href;
                    }else {
                        low = href;
                    }  
                }
            }
            </vue-markdown>
            <label>我的解答：(优化)</label>
            <vue-markdown>
            let low = 1;
            let high = n;
            let href = null;
            while(low != high) {
                if(isBadVersion(low) && !isBadVersion(low - 1)) {
                    return low;
                }
                if(isBadVersion(high) && !isBadVersion(high - 1)) {
                    return high;
                }
                href = Math.ceil((high + low) / 2);
                if(isBadVersion(href) && !isBadVersion(href - 1)) {
                    return href;
                }else {
                    if(isBadVersion(href)) {
                        high = href - 1;
                    }else {
                        low = href + 1;
                    }  
                }
            }
            return low;
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            let pos = Math.floor(n / 2);
            let goodPos = 0;
            let badPos = n
            while (badPos - goodPos !== 1) {
                if (isBadVersion(pos)) {
                    badPos = pos;
                    pos = Math.floor((badPos + goodPos) / 2);
                } else {
                    goodPos = pos;
                    pos = Math.ceil((badPos + goodPos) / 2);
                }
            }
            return badPos;
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
        var nums1 = [4,0,0,0,0,0], m = 1,
            nums2 = [1,2,3,5,6],       n = 5
        var a = this.merge(nums1, m, nums2, n);
        //console.log(a, '合并两个有序数组');
        //console.log([-1,-1,-1,-1,-1,-10,-10,-10,-10,-2,-2,-2,-2,-2,-2,-2,-2,-2,-3,-3,-3,-3,-3,-4,-4,-4,-4,-4,-4,-4,-4,-5,-5,-5,-5,-5,-5,-5,-5,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-8,-8,-8,-8,-8,-8,-8,-9,-9,-9,-9,-9,-9,-9,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,9,9].sort(function(a,b){return a - b;}))
        //console.log(nums2.sort(function(a,b){return a > b}), 'asdasd')
        let b = this.solution(10);
        console.log(b, '第一个错误的版本');
    },
    methods: {
        merge(nums1, m, nums2, n) {
            let i = m - 1;
            let j = n - 1;
            while(i >= 0 || j >= 0) {
                if (nums1[i] >= nums2[j] || j < 0) {
                    nums1[i + j + 1] = nums1[i];
                    i--;
                } else {
                    nums1[i + j + 1] = nums2[j];
                    j--;
                }
            }
            return nums1;

            /*nums1 = nums1.map((item, index)=>{
                if(index < m) {
                    return item;
                }else if(index >= m && index < (n + m)) {
                    return nums2[index - m];
                }
            })
            nums1 = nums1.sort()*/
        },
        solution(n) {
            var low = 1;
            var high = n;
            var href = null;
            while(low != high) {
                if(this.isBadVersion(low) && !this.isBadVersion(low - 1)) {
                    return low;
                }
                if(this.isBadVersion(high) && !this.isBadVersion(high - 1)) {
                    return high;
                }
                href = Math.ceil((high + low) / 2);
                if(this.isBadVersion(href) && !this.isBadVersion(href - 1)) {
                    return href;
                }else {
                    if(this.isBadVersion(href)) {
                        high = href - 1;
                    }else {
                        low = href + 1;
                    }  
                }
            }
        },
        isBadVersion(n) {
            return n >= 6 ? true : false
        }
    }
}

</script>
<style lang="less">
    
</style>