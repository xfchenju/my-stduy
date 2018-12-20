<template>
    <div id="design">
        <h4>打乱数组</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            /**
             * @param {number[]} nums
             */
            var Solution = function(nums) {
                this.nums = nums;
                this.nums1 = JSON.parse(JSON.stringify(nums));
            };

            /**
             * Resets the array to its original configuration and return it.
             * @return {number[]}
             */
            Solution.prototype.reset = function() {
                return this.nums;
            };

            /**
             * Returns a random shuffling of the array.
             * @return {number[]}
             */
            Solution.prototype.shuffle = function() { 
                this.nums1.sort(function(a, b) {
                    return Math.random() > 0.5 ? -1 : 1;
                });
                return this.nums1;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            let Solution = function (nums)
            {
                this.copy = nums.concat();
                this.nums = nums;
            };

            /**
             * Resets the array to its original configuration and return it.
             * @return {number[]}
             */
            Solution.prototype.reset = function ()
            {
                return this.copy;
            };

            /**
             * Returns a random shuffling of the array.
             * @return {number[]}
             */
            Solution.prototype.shuffle = function ()
            {
                if (this.nums === null)
                    return null;
                let length = this.nums.length;

                for (let i = length - 1; i >= 0; i--)
                {
                    //生成随机数
                    // Math.random()生成 0-1,则 Math.random() * 5 生成 0-5
                    // 此处生成 0 - (length - 1)
                    let random = Math.floor(Math.random() * (length - 1));
                    
                    //遍历交换
                    let tmp = this.nums[i];
                    this.nums[i] = this.nums[random];
                    this.nums[random] = tmp;
                }
                
                return this.nums;
            };

            </vue-markdown>
        </div>
        <hr>
        <h4>最小栈</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            /**
             * initialize your data structure here.
             */
            var MinStack = function() {
                this.arr = [];
            };

            /** 
             * @param {number} x
             * @return {void}
             */
            MinStack.prototype.push = function(x) {
                return this.arr.push(x);
            };

            /**
             * @return {void}
             */
            MinStack.prototype.pop = function() {
                return this.arr.pop();
            };

            /**
             * @return {number}
             */
            MinStack.prototype.top = function() {
                return this.arr[this.arr.length - 1];
            };

            /**
             * @return {number}
             */
            MinStack.prototype.getMin = function() {
                var min = this.arr[0];
                for(let i = 0; i < this.arr.length; i++) {
                    if(min > this.arr[i]) {
                        min = this.arr[i];
                    }
                }
                return min;
            };

            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            /**
             * initialize your data structure here.
             */
            var MinStack = function() {
              this.stack = []
              this.minStack = []
            };

            /** 
             * @param {number} x
             * @return {void}
             */
            MinStack.prototype.push = function(x) {
              this.stack.push(x)
              if (this.minStack.length === 0) {
                this.minStack.push(x)
              } else {
                if (this.minStack[this.minStack.length - 1] >= x) {
                  this.minStack.push(x)
                }
              }
            };

            /**
             * @return {void}
             */
            MinStack.prototype.pop = function() {
              let popNum = this.stack.pop()
              if ((this.minStack[this.minStack.length - 1] === popNum)) {
                this.minStack.pop()
              }
              return popNum
            };

            /**
             * @return {number}
             */
            MinStack.prototype.top = function() {
              return this.stack[this.stack.length - 1]
            };

            /**
             * @return {number}
             */
            MinStack.prototype.getMin = function() {
              return this.minStack[this.minStack.length - 1]
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
        console.log(new Object);
        var nums = [1, 2, 3];
        var solution = new Object(nums);

        console.log(solution, 'solution');

        //solution.shuffle();

        //solution.reset();

        var Solution = function(nums) {
            this.x = nums;
            constructor = nums;
            return nums;
        };

        /**
         * Resets the array to its original configuration and return it.
         * @return {number[]}
         */
        Solution.prototype.reset = function() {

        };

        /**
         * Returns a random shuffling of the array.
         * @return {number[]}
         */
        Solution.prototype.shuffle = function() {
            
        };

    },
    methods: {
    }
}

</script>
<style lang="less">
    
</style>