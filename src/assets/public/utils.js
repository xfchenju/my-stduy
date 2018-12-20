'use strict';
/**
 * 根据数组内每个对象中的某个元素给整个数组排序(不改变原数组)
 * @Date:     2018-11-12
 * @Modified: 2018-11-12
 * @param     {Array}   arr      [排序数组（原数组）]
 * @param     {String}   itemName [排序规则字段（字段的值必须为数字类型）默认'id']
 * @param     {String}   sortType [排序规则（正序倒序）默认正序'asc']
 * @return    {[type]}            [description]
 */
export function sortArrayByObjectItem(arr, itemName = 'id', sortType = 'asc') {
	// 深拷贝
    let newArr = JSON.parse(JSON.stringify(arr));
    // 排序
    newArr.sort(function(a, b) {
        if(sortType == 'asc') {
            return a[itemName] > b[itemName];  
        }else {
            return a[itemName] < b[itemName];
        }
    })
    return newArr;
}