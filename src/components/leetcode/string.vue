<template>
    <div id="leetcode">
        <h4>反转字符串</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var reverseString = function(s) {
                var arr = [];
                for(var i = 0; i < s.length; i++) {
                    arr.unshift(s[i])
                }
                return arr.join('');
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var reverseString = function(s) {
                var arr = s.split('');
                arr.reverse();
                return arr.join('');
            };
            </vue-markdown>
        </div>
        <hr/>
        <h4>反转整数</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var reverse = function(x) {
                var sym = 1;
                if(x > 0) {
                    sym = 1;
                }else if(x == 0) {
                    return 0;
                }else {
                    sym = -1;
                }
                var arr = String(Math.abs(x)).split('');
                arr.reverse();
                arr = arr.join('');
                if(arr <= Math.pow(2, 31)) {
                    return sym * Number(arr);
                }else {
                    return 0;
                }
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var reverse = function(num) {
                // 边界条件 num 是否为为数字
                const str = (num + '').split('')
                let reverseStr = ''
                for (let i = str.length-1; i >= 0; i-- ) {
                    reverseStr += str[i]
                }
                if (reverseStr.indexOf('-') !== -1) {
                    reverseStr = '-' + reverseStr.slice(0, reverseStr.length-1)
                }
                const reverseNum = Number(reverseStr)
                if (reverseNum > (Math.pow(2, 31) -1) || reverseNum < -Math.pow(2,31)) return 0 
                return reverseNum
            };
            </vue-markdown>
        </div>
        <hr/>
        <h4>字符串中的第一个唯一字符</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var firstUniqChar = function(s) {
                var arr = s.split('');
                var arr1 = {};
                for(var i = 0; i < arr.length; i++) {
                    if(arr1[arr[i]]) {
                        arr1[arr[i]]++;
                    }else {
                        arr1[arr[i]] = 1;
                    }
                }
                for(var i in arr1) {
                    if(arr1[i] == 1) {
                        return s.indexOf(i);
                    }
                }
                return -1;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var firstUniqChar = function(s) {
                let firstUniqChar = s.length;
                let alpha = "abcdefghijklmnopqrstuvwxyz";
                for (let i = 0; i < alpha.length; i++) {
                    let index = s.indexOf(alpha[i]);
                    if (index != -1 && index == s.lastIndexOf(alpha[i])) {
                        if (index < firstUniqChar) {
                            firstUniqChar = index;
                        }
                    }
                }
                return firstUniqChar == s.length ? -1 : firstUniqChar;
            };
            </vue-markdown>
        </div>
        <hr/>
        <h4>有效的字母异位词</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var isAnagram = function(s, t) {
                var sArr = s.split('');
                var tArr = t.split('');
                if(sArr.length != tArr.length) {
                    return false;
                }
                var newSArr = {};
                var newTArr = {};
                for(let i = 0; i < sArr.length; i++){
                    if(newSArr[sArr[i]]) {
                        newSArr[sArr[i]]++;
                    }else {
                        newSArr[sArr[i]] = 1;
                    }
                }
                for(let i = 0; i < tArr.length; i++){
                    if(newTArr[tArr[i]]) {
                        newTArr[tArr[i]]++;
                    }else {
                        newTArr[tArr[i]] = 1;
                    }
                }
                for(let i in newSArr) {
                    if(newSArr[i] != newTArr[i]) {
                        return false;
                    }
                }
                return true;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            let isAnagram = function(s, t) {
                if (s.length !== t.length) return false;
                let map = {};
                for (let i = 0; i < s.length; i++) {
                    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
                    map[t[i]] = map[t[i]] ? map[t[i]] - 1 : -1;
                }
                for (let key of Object.keys(map)) {
                    if (map[key] !== 0) {
                        return false;   
                    }
                }
                return true;
            };
            </vue-markdown>
        </div>
        <hr/>
        <h4>验证回文串</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var isPalindrome = function(s) {
                if(s == ' ') return true;
                s = s.toLowerCase();
                var Regx = /^[A-Za-z0-9]*$/;
                var len = s.length;
                var k = len - 1;
                for(let i = 0; i < len; i++) {
                    var iStr = s.charAt(i);
                    if(Regx.test(iStr)) {
                        for(let j = k; j >= 0; j--) {
                            k--;
                            var jStr = s.charAt(j);
                            if(Regx.test(jStr)) {
                               if(i != j && s.charAt(i) != s.charAt(j)) {
                                   return false;
                               }
                               break;
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
            var isPalindrome = function(s) {
                if (s == "") {
                    return true;
                }
                var str = s.replace(new RegExp('[^a-zA-Z0-9]', "g"), "").toLowerCase();
                var i = 0;
                var j = str.length - 1;
                while (j > i) {
                    if (str[i] === str[j]) {
                        i++;
                        j--;
                    } else {
                        return false;
                    }
                }
                return true;
            };
            </vue-markdown>
        </div>
        <hr/>
        <h4>字符串转整数 (atoi)</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            if(str == '') {
                return 0;
            }
            var Regx = /^[0-9]*$/;
            var sym = 1;
            var isSym = false;
            var newStr = '';
            var turnStatus = 0;
            for(var i = 0; i < str.length; i++) {
                var iStr = str.charAt(i);
                if(turnStatus == 2) {
                    break;
                }

                if(Regx.test(iStr) && (turnStatus == 0 || turnStatus == 1)) {
                    newStr += iStr;
                    turnStatus = 1;
                }else {
                    if(turnStatus == 1) {
                        turnStatus = 2;
                    }
                }

                if(iStr == ' ' && turnStatus == 0) {
                    turnStatus = 0;
                }else if(iStr == '-' && turnStatus == 0) {
                    sym = -1;
                    turnStatus = 1;
                }
            }
            if(newStr) {
                if(sym * newStr >= -Math.pow(2, 31) && sym * newStr <= Math.pow(2, 31) - 1) {
                    return sym * newStr 
                }else {
                    if(sym == 1) {
                        return Math.pow(2, 31) - 1;
                    }else {
                        return -Math.pow(2, 31);
                    }
                }
            }else {
                return 0;
            }
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var myAtoi = function(str) {
                let num = parseInt(str)
                if (isNaN(num)) {
                    return 0
                }
                if (num < -2147483648) {
                    return -2147483648
                    }
                if (num > 2147483647) {
                    return 2147483647
                }
                return num
            };
            </vue-markdown>
        </div>
        <hr/>
        <h4>实现strStr()</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var strStr = function(haystack, needle) {
                if(!haystack.includes(needle)) {
                    return -1
                }else {
                    return haystack.indexOf(needle);
                }
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var strStr = function(haystack, needle) {
                return haystack.indexOf(needle)
            };
            </vue-markdown>
        </div>
        <hr/>
        <h4>报数</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var countAndSay = function(n) {
                var item = '1';
                for(var i = 0; i < (n - 1); i++) {
                    var x = 0;
                    var str = '';
                    for(var j = 0; j < item.length; j++) {
                        var jStr = item.charAt(j);
                        if((item.length - 1) == 0) {
                            str += `1${jStr}`;
                            break;
                        }
                        if(j != 0 && j != item.length - 1) {
                            if(item.charAt(j) != item.charAt(j + 1)) {
                                x++;    
                                if(x > 0) {
                                    str += `${x}${jStr}`;
                                    x = 0;
                                }
                            }else {
                                x++;
                            }
                        }
                        if(j == 0) {
                            x++;
                            if(item.charAt(j) != item.charAt(j + 1)) {
                                if(x > 0) {
                                    str = `${x}${jStr}`;
                                    x = 0;
                                }
                            }
                        }
                        if(j == item.length - 1) {
                            x++;
                            if(x > 0) {
                                str += `${x}${jStr}`;
                                x = 0;
                            }
                        }
                    }
                    item = str;
                }
                return item;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            let countAndSay = function(n) {
                let res = '1';
                for (let i = 1; i < n; i++) {
                    let temp = res;
                    let tag = temp[0];
                    let count = 1;
                    res = [];
                    for (let j = 1; j < temp.length; j++) {
                        if (temp[j] === tag) {
                            count++;
                        } else {
                            res += count + tag;
                            tag = temp[j];
                            count = 1;
                        } 
                    }
                    res += count + tag;
                }
                return res;
            };
            </vue-markdown>
        </div>
        <hr/>
        <h4>最长公共前缀</h4>
        <div>
            <label>我的解答：</label>
            <vue-markdown>
            var longestCommonPrefix = function(strs) {
                if(strs.length < 1) {
                    return '';
                }
                let minStr = strs[0];
                for(let i = 0; i < strs.length; i++) {
                    if(strs[i].length < minStr.length) {
                        minStr = strs[i];
                    }
                }
                var preStr = '';
                for(let j = 0; j < minStr.length; j++) {
                    let pre = minStr.slice(0, j + 1);
                    let preTime = 0;
                    for(let k = 0; k < strs.length; k++) {
                        if(strs[k].indexOf(pre) == 0) {
                            preTime++;
                        }
                    }
                    if(preTime == strs.length) {
                        if(pre.length > preStr.length) {
                            preStr = pre
                        }
                    }
                }
                return preStr;
            };
            </vue-markdown>
        </div>
        <div>
            <label>更好的解答：</label>
            <vue-markdown>
            var longestCommonPrefix = function(strs) {
                if (strs.length == 0) return "";
                let prefix = strs[0];
                for (let i = 1; i < strs.length; i++)
                    while (strs[i].indexOf(prefix) != 0) {
                        prefix = prefix.substring(0, prefix.length - 1);
                        if (prefix.length == 0) return "";
                    }
                return prefix;
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
        var str = '1920123';
        //console.log(str.padStart(8, '0'), '字符串前补零');
        var a = this.reverse(123);
        //console.log(a, '颠倒整数');
        var b = this.firstUniqChar("loveleetcode");
        //console.log(b, '字符串中的第一个唯一字符');
        var c = this.isPalindrome("A man, a plan, a canal: Panama");
        //console.log(c, '验证回文字符串');
        var d = this.myAtoi("-4193-3ith words");
        //console.log(d, '字符串转整数 (atoi)');
        var e = this.countAndSay(5);
        //console.log(e, '报数');
        var f = this.longestCommonPrefix(["flower","flow","flight"]);
        console.log(f, '最长公共前缀');
    },
    methods: {
        reverse(x) {
            var sym = 1;
            if(x > 0) {
                sym = 1;
            }else if(x == 0) {
                return 0;
            }else {
                sym = -1;
            }
            var arr = String(Math.abs(x)).split('');
            arr.reverse();
            arr = arr.join('');
            if(arr <= Math.pow(2, 31)) {
                return sym * Number(arr);
            }else {
                return 0;
            }
        },
        firstUniqChar(s) {
            var arr = s.split('');
            var arr1 = {};
            for(var i = 0; i < arr.length; i++) {
                if(arr1[arr[i]]) {
                    arr1[arr[i]]++;
                }else {
                    arr1[arr[i]] = 1;
                }
            }
            for(var i in arr1) {
                if(arr1[i] == 1) {
                    return s.indexOf(i);
                }
            }
            return -1;
        },
        isPalindrome(s) {
            if(s == ' ') return s;
            s = s.toLowerCase();
            var Regx = /^[A-Za-z0-9]*$/;
            var len = s.length;
            var k = len - 1;
            for(let i = 0; i < len; i++) {
                var iStr = s.charAt(i);
                if(Regx.test(iStr)) {
                    for(let j = k; j >= 0; j--) {
                        k--;
                        var jStr = s.charAt(j);
                        if(Regx.test(jStr)) {
                           if(i != j && s.charAt(i) != s.charAt(j)) {
                               return false;
                           }
                           break;
                        }
                    }
                }
            }
            return true;
        },
        myAtoi(str) {
            if(str == '') {
                return 0;
            }
            var Regx = /^[0-9]*$/;
            var sym = 1;
            var isSym = false;
            var newStr = '';
            var turnStatus = 0;
            for(var i = 0; i < str.length; i++) {
                var iStr = str.charAt(i);
                if(turnStatus == 2) {
                    break;
                }

                if(Regx.test(iStr) && (turnStatus == 0 || turnStatus == 1)) {
                    newStr += iStr;
                    turnStatus = 1;
                }else {
                    if(turnStatus == 1) {
                        turnStatus = 2;
                    }
                }

                if(iStr == ' ' && turnStatus == 0) {
                    turnStatus = 0;
                }else if(iStr == '-' && turnStatus == 0) {
                    sym = -1;
                    turnStatus = 1;
                }
            }
            if(newStr) {
                if(sym * newStr >= -Math.pow(2, 31) && sym * newStr <= Math.pow(2, 31) - 1) {
                    return sym * newStr 
                }else {
                    if(sym == 1) {
                        return Math.pow(2, 31) - 1;
                    }else {
                        return -Math.pow(2, 31);
                    }
                }
            }else {
                return 0;
            }
        },
        // 报数
        countAndSay(n) {
            var item = '1';
            for(var i = 0; i < (n - 1); i++) {
                var x = 0;
                var str = '';
                for(var j = 0; j < item.length; j++) {
                    var jStr = item.charAt(j);
                    if((item.length - 1) == 0) {
                        str += `1${jStr}`;
                        break;
                    }
                    if(j != 0 && j != item.length - 1) {
                        if(item.charAt(j) != item.charAt(j + 1)) {
                            x++;    
                            if(x > 0) {
                                str += `${x}${jStr}`;
                                x = 0;
                            }
                        }else {
                            x++;
                        }
                    }
                    if(j == 0) {
                        x++;
                        if(item.charAt(j) != item.charAt(j + 1)) {
                            if(x > 0) {
                                str = `${x}${jStr}`;
                                x = 0;
                            }
                        }
                    }
                    if(j == item.length - 1) {
                        x++;
                        if(x > 0) {
                            str += `${x}${jStr}`;
                            x = 0;
                        }
                    }
                }
                item = str;
            }
            return item;
        },
        // longestCommonPrefix(strs) {
        //     if(strs.length < 1) {
        //         return '';
        //     }
        //     let minStr = strs[0];
        //     for(let i = 0; i < strs.length; i++) {
        //         if(strs[i].length < minStr.length) {
        //             minStr = strs[i];
        //         }
        //     }
        //     var preStr = '';
        //     for(let i = 0; i < minStr.length; i++) {
        //         for(let j = i; j < minStr.length; j++) {
        //             var pre = minStr.slice(i, j + 1);
        //             var preTime = 0;
        //             for(let k = 0; k < strs.length; k++) {
        //                 if(strs[k].indexOf(pre) > -1) {
        //                     preTime++;
        //                 }
        //             }
        //             if(preTime == strs.length) {
        //                 if(pre.length > preStr.length) {
        //                     preStr = pre
        //                 }
        //             }
        //         }
        //     }
        //     return preStr;
        // },
        longestCommonPrefix(strs) {
            if(strs.length < 1) {
                return '';
            }
            let minStr = strs[0];
            for(let i = 0; i < strs.length; i++) {
                if(strs[i].length < minStr.length) {
                    minStr = strs[i];
                }
            }
            var preStr = '';
            for(let j = 0; j < minStr.length; j++) {
                var pre = minStr.slice(0, j + 1);
                var preTime = 0;
                console.log( j, pre)
                for(let k = 0; k < strs.length; k++) {
                    if(strs[k].indexOf(pre) == 0) {
                        preTime++;
                    }
                }
                if(preTime == strs.length) {
                    if(pre.length > preStr.length) {
                        preStr = pre
                    }
                }
            }
            return preStr;
        }
    }
}

</script>
<style lang="less">
    
</style>