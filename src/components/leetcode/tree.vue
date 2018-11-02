<template>
    <div id="leetcode">
        <h4>二叉树的最大深度</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var maxDepth = function(root) {
                if(root) {
                    var left = maxDepth(root.left);
                    var right = maxDepth(root.right);
                    return 1 + Math.max(left, right);
                }else {
                    return 0;
                }
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            let maxDepth = function(root) {
                return root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0;
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
        var tree = {
            val: 10,
            right: {
                val: 15,
                right: {
                    val: 20,
                    right: null,
                    left: null
                },
                left: {
                    val: 6,
                    right: null,
                    left: null
                }
            },
            left: {
                val: 5,
                right: null,
                left: null
            }
        }
        var tree1 = {
            val: 5,
            right: {
                val: 4,
                right: {
                    val: 6,
                    right: null,
                    left: null
                },
                left: {
                    val: 3,
                    right: null,
                    left: null
                }
            },
            left: {
                val: 1,
                right: null,
                left: null
            }
        }
        var tree2 = {
            val: 2,
            right: {
                val: 3,
                right: null,
                left: null
            },
            left: {
                val: 1,
                right: null,
                left: null
            }
        }
        var a = this.maxDepth(tree);
        //console.log(a, '二叉树的最大深度');
        var b = this.isValidBST(tree2);
        console.log(b, '验证二叉搜索树');

        var arr = [5,1,4,null,null,3,6];
        arr.map(item => {
            return this.createTree(item)
        })
        console.log(arr, 'arr')
        
    },
    methods: {
        maxDepth(node) {
            if(node) {
                var left = this.maxDepth(node.left);
                var right = this.maxDepth(node.right);
                return 1 + Math.max(left, right);
            }else {
                return 0;
            }
            // if(node) {
            //     var stack = []
            //     stack.push(node);
            //     var i = 0;
            //     while(stack.length !== 0) {
            //         node = stack.pop();
            //         console.log(node, node.val, i, stack, 'node')
            //         if(node.right) {
            //             stack.push(node.right)
            //         }else {
            //             console.log('空', i)
            //         }
            //         if(node.left) {
            //             stack.push(node.left)
            //         }else {
            //             console.log('空2', i)
            //         }
            //         i++;
            //     }
            // }
        },
        createTree(val) {
            this.val = val;
            this.left = this.right = null;
        },
        isValidBST(root){
            if(root) {
                var queue = [];
                queue.push(root);
                var max = null;
                var min = null;
                while(queue.length !== 0) {
                    root = queue.pop();
                    if(root.left) {
                        if(min) {
                            min = Math.min(min, root.left.val);
                        }else {
                            min = root.left.val;
                        }
                        if(root.val <= min) {
                            return false;
                        }
                        queue.push(root.left);
                    }
                    if(root.right) {
                        if(max) {
                            max = Math.max(max, root.right.val);
                        }else {
                            max = root.right.val;
                        }
                        if(root.val >= max) {
                            return false;
                        }
                        queue.push(root.right);
                    }
                }
                return true;
            }else {
                return true;
            }
        }
    }
}

</script>
<style lang="less">
    
</style>