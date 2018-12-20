<template>
    <div id="more">
        <div v-for="item, index in data">
            <hr v-if="index != 0">
            <h4>{{index+1}}、{{item.title}}({{item.id}})</h4>
            <div v-if="!item.link">
                <div>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的解答：</label>
                    <vue-markdown>
                        {{item.myAnswer}}
                    </vue-markdown>
                </div>
                <div v-for="items in item.betterAnswer" v-if="item.betterAnswer && item.betterAnswer.length > 0">
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更好的解答：</label>
                    <vue-markdown>
                        {{items}}
                    </vue-markdown>
                </div>
            </div>
            <a href="javascript:;" @click="routerToPage(item.link)" v-else>查看</a>
        </div>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import { sortArrayByObjectItem } from '../../assets/public/utils.js'
export default {
    name: 'more',
    data() {
        return {
        data: [
            {
                id: '929',
                title: '独特的电子邮件地址',
                level: '1',
                link: '',
                myAnswer: 
                    `var numUniqueEmails = function(emails) {
                        var res = [];
                        for(let i = 0; i < emails.length; i++) {
                            var arr = emails[i].split('@');
                            var arr1 = arr[0].split('+');
                            var before = arr1[0].replace(/\./g, "");
                            var email = before + '@' + arr[1];
                            if(res.findIndex(n => n == email) < 0) {
                                res.push(email)
                            }
                        }
                        return res.length;
                    };`,
                betterAnswer: [
                    `var numUniqueEmails = function(emails) {
                        let map = {};
                        let dupCount = 0;
                        
                        for (email of emails) {
                            email = email.split("@");
                            email = email[0].replace(/(\.)+|(\+(.*))/mgi, '') + '@' +email[1];   
                            if (map[email]) dupCount++;
                            else map[email] = true;
                        }
                        
                        return emails.length - dupCount;
                    };`
                ]
            },{
                id: '595',
                title: '大的国家',
                level: '1',
                link: '',
                myAnswer: 
                    `SELECT name, population, area FROM World WHERE area > 3000000 OR population > 25000000`,
            },{
                id: '182',
                title: '查找重复的电子邮箱',
                level: '1',
                link: '',
                myAnswer: 
                    `SELECT Email FROM Person GROUP BY Email HAVING COUNT(*) > 1`,
                betterAnswer: [
                    `SELECT Email FROM Person GROUP BY Email HAVING COUNT(Email) > 1;`
                ]
            },{
                id: '905',
                title: '按奇偶排序数组',
                level: '1',
                link: '',
                myAnswer: 
                    `var sortArrayByParity = function(A) {
                        var arr = []
                        for(var i = 0; i < A.length; i++) {
                            if(A[i] % 2 == 0) {
                                arr.unshift(A[i])
                            }else {
                                arr.push(A[i])
                            }
                        }
                        return arr;
                    };`,
                betterAnswer: [
                    `let sortArrayByParity = function (A) {
                        let result = [];
                        for (let i = 0, len = A.length; i < len; i += 1) {
                            A[i] % 2 === 0 ? result.unshift(A[i]) : result.push(A[i]);
                        }
                        return result;
                    };`
                ]
            },{
                id: '832',
                title: '翻转图像',
                level: '1',
                link: '',
                myAnswer: 
                    `flipAndInvertImage(A) {
                        for(let i = 0; i < A.length; i++) {
                            for(let j = 0; j < A[i].length / 2; j++) {
                                var tmp = A[i][j] == 1 ? 0 : 1;
                                A[i][j] = A[i][A[i].length - 1 - j] == 1 ? 0 : 1;
                                A[i][A[i].length - 1 - j] = tmp;
                            }
                        }
                        return A;
                    }`,
                betterAnswer: [
                    `var flipAndInvertImage = function(A) {
                        let result = [];
                        for(line of A){
                            const flipped = line.reverse();
                            const inversed = flipped.map(bit => bit ? 0 : 1);
                            result.push(inversed);
                        }
                        return result;
                    };`
                ]
            },{
                id: '657',
                title: '机器人能否返回原点',
                level: '1',
                link: '',
                myAnswer: 
                    `var judgeCircle = function(moves) {
                        var horizontal = 0;
                        var vertical = 0;
                        for(let i = 0; i < moves.length; i++) {
                            let str = moves.charAt(i);
                            if(str == 'R') {
                                horizontal++;
                            }else if(str == 'L') {
                                horizontal--;
                            }else if(str == 'U') {
                                vertical++;
                            }else if(str == 'D') {
                                vertical--;
                            }
                        }
                        if(horizontal != 0 || vertical != 0) {
                            return false;
                        }else {
                            return true;
                        }
                    };`,
            },{
                id: '852',
                title: '山脉数组的峰顶索引',
                level: '1',
                link: '',
                myAnswer: 
                    `var peakIndexInMountainArray = function(A) {
                        var max = Math.max(...A);
                        var maxIndex = A.findIndex(n => n == max);
                        return maxIndex;
                    };`,
            },{
                id: '476',
                title: '数字的补数',
                level: '1',
                link: '',
                myAnswer: 
                    `var findComplement = function(num) {
                        var num2 = String(parseInt(num, 10).toString(2));
                        
                        let arr = [];
                        for(let i = 0; i < num2.length; i++) {
                            let str = num2.charAt(i);
                            arr.push(str == 1 ? 0 : 1);
                        }
                        return parseInt(arr.join(""), 2)
                    };`,
                betterAnswer: [
                    `//类似的
                    var findComplement = function(num) {
                        var binary = parseInt(num, 10).toString(2);
                        var newBinary = binary.replace(/(0)|(1)/g, function(m, $1, $2) {
                          return $2 ? 0 : 1
                        })
                            
                        return Number(parseInt(newBinary, 2).toString(10));
                    };;`
                ]
            },{
                id: '922',
                title: '按奇偶排序数组 II',
                level: '1',
                link: '',
                myAnswer: 
                    `var sortArrayByParityII = function(A) {
                        var arr = new Array(A.length);
                        let tmp = 0;
                        let tmp1 = 1;
                        for(let i = 0; i < A.length; i++) {
                            if(A[i] % 2 == 0) {
                                arr[tmp] = A[i];
                                tmp = tmp + 2;
                            }else {
                                arr[tmp1] = A[i]
                                tmp1 = tmp1 + 2;
                            }
                        }
                        return arr;
                    };`,
                betterAnswer: [
                    `//类似的
                    var sortArrayByParityII = function(A) {
                        var arr = [];
                        var brr = [];
                        var j = 0;
                        var m= 0;
                        for(var i = 0; i<A.length; i++){
                            if(A[i] %2 == 0){
                                arr[j] = A[i];
                                j++;
                            }else{
                                brr[m]= A[i];
                                m++;
                            }
                             
                            
                        }

                        for(var k =1;k<=A.length/2;k++){
                            A[2*k-2] = arr[k-1];
                            A[2*k-1] = brr[k-1];
                        }
                       return A;
                    };`
                ]
            },{
                id: '804',
                title: '唯一摩尔斯密码词',
                level: '1',
                link: '',
                myAnswer: 
                    `var uniqueMorseRepresentations = function(words) {
                        var PwdArr = {
                            'a': '.-',
                            'b': '-...',
                            'c': '-.-.',
                            'd': '-..',
                            'e': '.',
                            'f': '..-.',
                            'g': '--.',
                            'h': '....',
                            'i': '..',
                            'j': '.---',
                            'k': '-.-',
                            'l': '.-..',
                            'm': '--',
                            'n': '-.',
                            'o': '---',
                            'p': '.--.',
                            'q': '--.-',
                            'r': '.-.',
                            's': '...',
                            't': '-',
                            'u': '..-',
                            'v': '...-',
                            'w': '.--',
                            'x': '-..-',
                            'y': '-.--',
                            'z': '--..'
                        };
                        var newWords = [];
                        for(let i = 0; i < words.length; i++) {
                            let pwd = '';
                            for(let j = 0; j < words[i].length; j++) {
                                let str = words[i].charAt(j);
                                pwd += PwdArr[str];
                            }
                            if(newWords.findIndex(n => n == pwd) < 0) {
                                newWords.push(pwd);
                            }
                        }
                        return newWords.length;
                    };`,
                betterAnswer: [
                    `let uniqueMorseRepresentations = function (words) {
                        let codeTable = {
                            a: ".-",
                            b: "-...",
                            c: "-.-.",
                            d: "-..",
                            e: ".",
                            f: "..-.",
                            g: "--.",
                            h: "....",
                            i: "..",
                            j: ".---",
                            k: "-.-",
                            l: ".-..",
                            m: "--",
                            n: "-.",
                            o: "---",
                            p: ".--.",
                            q: "--.-",
                            r: ".-.",
                            s: "...",
                            t: "-",
                            u: "..-",
                            v: "...-",
                            w: ".--",
                            x: "-..-",
                            y: "-.--",
                            z: "--.."
                        };

                        let resultObj = {
                            length : 0
                        };
                        for (let i = 0, len = words.length; i < len; i += 1) {
                            let str = words[i],
                                tmpCode = "";
                            for (let j = 0, strLen = str.length; j < strLen; j++) {
                                tmpCode += codeTable[str[j]];
                            }
                            if (!(tmpCode in resultObj)) {
                                resultObj[tmpCode] = 1;
                                resultObj.length++;
                            }
                        }
                        return resultObj.length;
                    };`
                ]
            },{
                id: '728',
                title: '自除数',
                level: '1',
                link: '',
                myAnswer: 
                    `var selfDividingNumbers = function(left, right) {
                        var arr = [];
                        for(let i = left; i <= right; i++) {
                            let numStr = String(i);
                            let tmp = true;
                            for(let j = 0; j < numStr.length; j++) {
                                let str = numStr.charAt(j);
                                if(numStr % str != 0) {
                                    tmp = false;
                                }
                            }
                            if(tmp) {
                                arr.push(Number(numStr));
                            }
                        }
                        return arr;
                    };`,
            },{
                id: '728',
                title: '自除数',
                level: '1',
                link: '',
                myAnswer: 
                    `SELECT * FROM cinema WHERE description <> 'boring' AND id&1 ORDER BY rating DESC`,
                betterAnswer: [
                    `SELECT id, movie, description, rating FROM cinema WHERE description != 'boring' AND id % 2 != 0 ORDER BY rating DESC`
                ]
            },{
                id: '500',
                title: '键盘行',
                level: '1',
                link: '',
                myAnswer: 
                    `var findWords = function(words) {
                        let lineArr = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
                        let arr = [];
                        for(let i = 0; i < words.length; i++) {
                            let tmp = '';
                            let node = true;
                            for(let j = 0; j < words[i].length && node; j++) {
                                let str = words[i].charAt(j).toLowerCase();
                                if(j == 0) {
                                    let k = -1;
                                    while(k < 2) {
                                        k++;
                                        if(lineArr[k].indexOf(str) > -1) {
                                            tmp = lineArr[k];
                                            k = 2;
                                        }
                                    }
                                }else {
                                    if(tmp.indexOf(str) < 0) {
                                        node = false;
                                    }
                                }
                            }
                            if(node) {
                                arr.push(words[i]);
                            }
                        }
                        return arr;
                    };`,
            },{
                id: '171',
                title: 'Excel表列序号',
                level: '1',
                link: '',
                myAnswer: 
                    `var titleToNumber = function(s) {
                        s = s.toUpperCase()
                        let num = 0;
                        for(let i = s.length - 1, j = 0; i >= 0; i--, j++) {
                            num += Math.pow(26, j) * (s.charCodeAt(i) - 64);
                        }
                        return num;
                    };`,
                betterAnswer: [
                    `//类似
                    let titleToNumber = function(s) {
                        let res = 0;
                        for (let e of s) {
                            res = res * 26 +  e.charCodeAt() - 64;
                        }
                        return res;
                    };`
                ]
            },{
                id: '867',
                title: '转置矩阵',
                level: '1',
                link: '',
                myAnswer: 
                    `var transpose = function(A) {
                        let arr = [];
                        for(let i = 0; i < A[0].length; i++) {
                            for(let j = 0; j < A.length; j++) {
                                if(!arr[i]) {
                                    arr[i] = [];
                                }
                                arr[i].push(A[j][i]);
                            }
                        }
                        return arr;
                    };`,
                betterAnswer: [
                    `var transpose = function(A) {
                        let D = [];
                        for (let i = 0; i < A.length; i++) {
                            for (let j = 0; j < A[i].length; j++) {
                                if (!D[j]) {
                                    D[j] = [];
                                }
                                D[j][i] = A[i][j];
                            }
                        }
                        return D;
                    };`
                ]
            },{
                id: '258',
                title: '各位相加',
                level: '1',
                link: '',
                myAnswer: 
                    `var addDigits = function(num) {
                        num = String(num);
                        while(num.length > 1) {
                            let res = 0;
                            for(let i = 0; i < num.length; i++) {
                                res += Number(num.charAt(i));
                            }
                            num = String(res);
                        }
                        return Number(num);
                    };`,
                betterAnswer: [
                    `var addDigits = function(num) {
                        if (num == 0){
                            return 0;
                        }
                        if (num % 9 == 0){
                            return 9;
                        }
                        else {
                            return num % 9;
                        }
                    };`,
                    `let addDigits = function(num) {
                        return 1 + (num - 1) % 9;
                    };`
                ]
            },{
                id: '908',
                title: '最小差值 I',
                level: '1',
                link: '',
                myAnswer: 
                    `//第一次解答
                    var smallestRangeI = function(A, K) {
                        A = A.sort(function(a, b) {
                            return a - b;
                        });
                        let length  = A.length;
                        if(length > 0) {
                            let min = A[0] + Math.abs(K);
                            let max = A[length - 1] - Math.abs(K);
                            if(min >= max) {
                                return 0;
                            }else {
                                return max - min;
                            }
                        }else {
                            return 0;
                        }
                    };
                    // 第二次解答
                    var smallestRangeI = function(A, K) {
                        let max = Math.max(...A) - Math.abs(K);
                        let min = Math.min(...A) + Math.abs(K);
                        return max - min > 0 ? max - min : 0;
                    };`,
            },{
                id: '821',
                title: '字符的最短距离',
                level: '1',
                link: '',
                myAnswer: 
                    `var shortestToChar = function(S, C) {
                        let arr = [];
                        let tmp = S.indexOf(C);
                        S = S.replace(C, '0');
                        let tmp1 = S.indexOf(C) > -1 ? S.indexOf(C) : null;
                        
                        for(let i = 0; i < S.length; i++) {
                            let str = S.charAt(i);
                            if(i <= tmp) {
                                arr.push(tmp - i);
                            }else {
                                if(tmp1) {
                                    if((i - tmp) < (tmp1 - i)) {
                                        arr.push(i - tmp);
                                    }else {
                                        arr.push(tmp1 - i);
                                        tmp = tmp1;
                                        S = S.replace(C, '0');
                                        tmp1 = S.indexOf(C) > -1 ? S.indexOf(C) : null;
                                    }
                                }else {
                                   arr.push(i - tmp); 
                                }
                            }
                        }
                        return arr;
                    };`,
                betterAnswer: [
                    `//类似
                    var shortestToChar = function(S, C) {
                      const arr = [];
                      for (let i = 0; i < S.length; i++) {
                        const s = S[i];
                        if (s === C) arr.push(i);
                      }
                      const res = [];
                      for (let i = 0; i < S.length; i++) {
                        const s = S[i];
                        const firstIndex = arr[0];
                        const secondIndex = arr[1] || Infinity;
                        if (i === secondIndex) {
                          res.push(0);
                          arr.shift();
                        } else {
                          res.push(Math.min(Math.abs(firstIndex - i), Math.abs(secondIndex - i)));
                        }
                      }
                      return res;
                    };`
                ]
            },{
                id: '561',
                title: '数组拆分 I',
                level: '1',
                link: '',
                myAnswer: 
                    `var arrayPairSum = function(nums) {
                        let sum = 0;
                        nums = nums.sort(function(a, b) { return a - b;});
                        for(let i = 0; i < nums.length; i++) {
                            if(i % 2 == 0) {
                                sum += nums[i];
                            }
                        }
                        return sum;
                    };`,
                betterAnswer: [
                    `//类似
                    let arrayPairSum = function(nums) {
                        nums.sort((a, b) => a - b);
                        let res = 0;
                        for (let i = 0; i < nums.length; i = i + 2) {
                            res += nums[i];
                        }
                        return res;
                    };`
                ]
            },{
                id: '181',
                title: '超过经理收入的员工',
                level: '1',
                link: '',
                myAnswer: 
                    `SELECT Name AS Employee FROM Employee AS A WHERE A.Salary > (SELECT B.Salary FROM Employee AS B WHERE B.id = A.ManagerId)`,
                betterAnswer: [
                    `SELECT e1.Name AS Employee
                        FROM Employee e1 INNER JOIN  Employee e2 ON e1.ManagerId = e2.id
                        WHERE e1.Salary > e2.Salary`
                ]
            },{
                id: '811',
                title: '子域名访问计数',
                level: '1',
                link: '',
                myAnswer: 
                    `var subdomainVisits = function(cpdomains) {
                        let arr = {};
                        cpdomains.map((item)=>{
                            let webArr = item.split(" ");
                            if(!arr[webArr[1]]) {
                                arr[webArr[1]] = Number(webArr[0]);
                            }else {
                                arr[webArr[1]] += Number(webArr[0]);
                            }
                            let webArr2 = webArr[1].split(".");
                            for(let i = 0; i < webArr2.length; i++) {
                                let webArr3 = webArr2;
                                for(let j = 0; j <= i; j++) {
                                    webArr3.splice(j, 1);
                                }
                                webArr3 = webArr3.join(".")
                                if(!arr[webArr3]) {
                                    arr[webArr3] = Number(webArr[0]);
                                }else {
                                    arr[webArr3] += Number(webArr[0]);
                                }
                            }
                        })
                        let newArr = []
                        for(let i in arr) {
                            newArr.push(arr[i] + " " + i);
                        }
                        return newArr;
                    };`,
                betterAnswer: [
                    `// 类似
                    var subdomainVisits = function(cpdomains) {
                        const map = new Map();
                        cpdomains.forEach(cpdomain => {
                            const arr = cpdomain.split(' ');
                            const times = +arr[0];
                            const domain = arr[1];
                            const parts = domain.split('.');
                            let url = '';
                            for (let i = parts.length - 1; i >= 0; i--) {
                                url = parts[i] + (url ? '.' + url : '');
                                if(map.has(url)) {
                                    map.set(url, map.get(url) + times);
                                } else {
                                    map.set(url, times);
                                }
                            }
                        });
                        const result = [];
                        map.forEach((v, k) => {
                            result.push(v + " " + k);
                        });
                        return result;
                    };`
                ]
            },{
                id: '806',
                title: '写字符串需要的行数',
                level: '1',
                link: '',
                myAnswer: 
                    `var numberOfLines = function(widths, S) {
                        S = S.toLowerCase();
                        let line = 1;
                        let lineNums = 0;
                        for(let i = 0; i < S.length; i++) {
                            let str = S.charCodeAt(i);
                            if(lineNums + widths[str - 97] > 100) {
                                lineNums = widths[str - 97];
                                line++;
                            }else {    
                                lineNums += widths[str - 97];
                            }
                        } 
                        return [line, lineNums];
                    };`,
            },{
                id: '463',
                title: '岛屿的周长',
                level: '1',
                link: '',
                myAnswer: 
                    `var islandPerimeter = function(grid) {
                        let boxes = 0;
                        let nearBoxes = 0;
                        for(let i = 0; i < grid.length; i++) {
                            for(let j = 0; j < grid[i].length; j++) {
                                if(grid[i][j] == 1) {
                                    boxes++;
                                    if((grid[i][j - 1] && grid[i][j - 1] == 1)) {
                                        nearBoxes++;
                                    } 
                                    if((grid[i][j + 1] && grid[i][j + 1] == 1)) {
                                        nearBoxes++;
                                    } 
                                    if((grid[i + 1] && grid[i + 1][j] && grid[i + 1][j] == 1)) {
                                        nearBoxes++;
                                    } 
                                    if((grid[i - 1] && grid[i - 1][j] && grid[i - 1][j] == 1)) {
                                        nearBoxes++;
                                    } 
                                }
                            }
                        }
                        return 4 * boxes - nearBoxes; 
                    };`,
                betterAnswer: [
                    `let islandPerimeter = function(grid) {
                        let res = 0;
                        for (let row = 0; row < grid.length; ++row) {
                            for (let col = 0; col < grid[0].length; ++col) {
                                if (grid[row][col] === 1) {
                                    res += 4;
                                    res -= row > 0 && grid[row - 1][col] ? 2 : 0;
                                    res -= col > 0 && grid[row][col - 1] ? 2 : 0;
                                }
                            }
                        }
                        return res;
                    };`
                ]
            },{
                id: '883',
                title: '三维形体投影面积',
                level: '1',
                link: '',
                myAnswer: 
                    `var projectionArea = function(grid) {
                        let top = 0, left = 0, front = 0;
                        let maxLeft = [];
                        let maxFront = [];
                        for(let i = 0; i < grid.length; i++) {
                            maxLeft[i] = [];
                            if(typeof(grid[0]) == 'object') {
                                for(let j = 0; j < grid[i].length; j++) {
                                    if(grid[i][j]) {
                                        top++;
                                    }
                                    maxLeft[i] = Math.max(maxLeft[i], grid[i][j]);
                                    if(!maxFront[j]) {
                                        maxFront[j] = grid[i][j];
                                    }else {
                                        maxFront[j] = Math.max(maxFront[j], grid[i][j])
                                    }
                                }
                            }else {
                                if(grid[i]) {
                                    top++;
                                }
                                left = left + grid[i];
                                front = front + grid[i];
                            }
                        }
                        if(left == 0) {
                            for(let i = 0; i < maxLeft.length; i++) {
                                left += maxLeft[i];
                            }
                        }
                        if(front == 0) {
                            for(let i = 0; i < maxFront.length; i++) {
                                front += maxFront[i];
                            }
                        }
                        return top + left + front;
                    };`,
                betterAnswer: [
                    `// 类似 通过计算顶视图 左视图 正视图
                    var projectionArea = function(grid) {
                        let count = 0;
                      const len = grid.length;
                      const Y = [];
                      Y.length = len;
                      Y.fill(0);
                      Y;
                      for (let i = 0; i < len; i++) {
                        const element = grid[i];

                        const maxX = Math.max.apply(null, element);

                        const noZeroNum = element.filter(item => item > 0).length;

                        count += maxX + noZeroNum;

                        for (let j = 0; j < len; j++) {
                          const item = element[j];
                          if (item > Y[j]) {
                            Y[j] = item;
                          }
                        }
                      }
                      Y.forEach(item => {
                        count += item;
                      });
                      return count;
                    };`
                ]
            },{
                id: '349',
                title: '两个数组的交集',
                level: '1',
                link: '',
                myAnswer: 
                    `var intersection = function(nums1, nums2) {
                        let res = [];
                        let arr = [];
                        let arr1 = [];
                        if(nums1.length < nums2.length) {
                            arr = nums1;
                            arr1 = nums2;
                        }else {
                            arr = nums2;
                            arr1 = nums1;
                        }
                        for(let i = 0; i < arr.length; i++) {
                            var num = arr[i];
                            if(arr1.includes(num) && !res.includes(num)) {
                                res.push(num);
                            }
                        }
                        return res;
                    };`,
                betterAnswer: [
                    `let intersection = function(nums1, nums2) {
                        let set = new Set();
                        let res = [];
                        nums1.forEach(num => set.add(num));
                        nums2.forEach(num => {
                            if (set.has(num)) {
                                res.push(num);
                                set.delete(num);
                            }
                        })
                        return res;
                    };`
                ]
            },
        ] 
        }
    },
    components: {
        'vue-markdown': VueMarkdown
    },
    created() {

        // let e = this.numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]);
        // console.log(e, '独特的电子邮件地址')

        // let f = this.sortArrayByParity([3,1,2,4]);
        // console.log(f, '按奇偶排序数组')

        // let g = this.flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]);
        // console.log(g, '翻转图像')

        // let h = this.subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]);
        // console.log(h, '翻转图像')
        // 
        const set1 = Array.from(new Set([1, 2, 2, 3]));
        console.log(set1, 'set1');
    },
    methods: {
        routerToPage(path) {
            this.$router.push(path)                                    
        },
        numUniqueEmails(emails) {
            var res = [];
            for(let i = 0; i < emails.length; i++) {
                var arr = emails[i].split('@');
                var arr1 = arr[0].split('+');
                var before = arr1[0].replace(/\./g, "");
                var email = before + '@' + arr[1];
                if(res.findIndex(n => n == email) < 0) {
                    res.push(email)
                }
            }
            return res.length;
        },
        sortArrayByParity(A) {
            var arr = []
            for(var i = 0; i < A.length; i++) {
                if(A[i] % 2 == 0) {
                    arr.unshift(A[i])
                }else {
                    arr.push(A[i])
                }
            }
            return arr;
        },
        flipAndInvertImage(A) {
            for(let i = 0; i < A.length; i++) {
                for(let j = 0; j < A[i].length / 2; j++) {
                    var tmp = A[i][j] == 1 ? 0 : 1;
                    A[i][j] = A[i][A[i].length - 1 - j] == 1 ? 0 : 1;
                    A[i][A[i].length - 1 - j] = tmp;
                }
            }
            return A;
        },
        subdomainVisits(cpdomains) {
            let arr = {};
            cpdomains.map((item)=>{
                let webArr = item.split(" ");
                if(!arr[webArr[1]]) {
                    arr[webArr[1]] = Number(webArr[0]);
                }else {
                    arr[webArr[1]] += Number(webArr[0]);
                }
                let webArr2 = webArr[1].split(".");
                for(let i = 0; i < webArr2.length; i++) {
                    let webArr3 = webArr2;
                    for(let j = 0; j <= i; j++) {
                        webArr3.splice(j, 1);
                    }
                    webArr3 = webArr3.join(".")
                    if(!arr[webArr3]) {
                        arr[webArr3] = Number(webArr[0]);
                    }else {
                        arr[webArr3] += Number(webArr[0]);
                    }
                }
            })
            let newArr = []
            for(let i in arr) {
                newArr.push(arr[i] + " " + i);
            }
            return newArr;
        },
    }
}

</script>
<style lang="less">
    
</style>