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
        var a = this.threeSum([-1, 0, 1, 2, -1, -4]);
        console.log(a, '三数之和')
    },
    methods: {
        threeSum(nums) {
            var arr = [];
            for(let i = 0; i < nums.length; i++) {
                for(let j = i + 1; j < nums.length; j++) {
                    for(let k = j + 1; k < nums.length; k++) {
                        if((nums[i] + nums[j] + nums[k]) == 0) {
                            var tmp = [nums[i], nums[j], nums[k]].sort(function(a, b){return a > b;});
                            if(arr.findIndex(n => n == tmp.toString()) < 0) {
                                arr.push(tmp);
                            }
                        }
                    }
                }
            }
            return arr;
        }
    }
}

</script>
<style lang="less">
    
</style>