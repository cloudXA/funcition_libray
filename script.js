/**
 * 查找数组元素位置
 */
function indexOf(arr, item) {
    var arrString = arr.join('');
    return arrString.indexOf(item);
}

/**
 * 数组求和
 */
function sum(arr) {
    var sum = 0;
    arr.forEach(items => {
        sum += items;
    });
    return sum;
    
}
/**
 * 移除数组中的元素
 */
function remove(arr, item) {
    var arrClone = [];
    for (var i = 0, length = arr.length; i < length; i++) {
        if (arr[i] !== item) {
            arrClone.push(arr[i]);
        }        
    }
    return arrClone;
}
/**
 * 移除数组中的元素
 */
function removeWithoutCopy(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        var index = arr.indexOf(item);
        if (index !== -1) {
            arr.splice(index,1);
        }
    }
    return arr;
}

/**
 * 添加元素
 */
function append(arr, item) {
    var arrClone = arr.concat();
    arrClone.push(item);
    return arrClone;
}

/**
 * 删除数组最后一个元素
 */
function truncate(arr) {
    var arrClone = arr.concat();
    arrClone.pop();
    return arrClone;
}

/**
 * 添加元素
 */
function prepend(arr, item) {
    var arrClone = arr.concat();
    arrClone.unshift(item);
    return arrClone;
}

/**
 * 删除数组第一个元素
 */
function curtail(arr) {
    var arrClone = arr.concat();
    arrClone.shift();
    return arrClone;
}

/**
 * 数组合并
 */
function concat(arr1, arr2) {
    return arr1.concat(arr2);
}

/**
 * 添加元素
 */
function insert(arr, item, index) {
    var arrClone = arr.concat();
    arrClone.splice(index,0,item);
    return arrClone;
}

/**
 * 计数
 */
function count(arr, item) {
    var total = 0;
    arr.forEach((num) => {
        if (num == item) {
            total ++;
        }
    })
        return total;
}

/**
 * 查找重复元素
 */
function duplicates(arr) {
    var template = [];
    for (var i = 0; i < arr.length; i ++) {
        for (var j = i + 1; j < arr.length - 1; j ++) {
            (arr[i] === arr[j]) ? template.push(arr[i]) : false;
        }
    }
    return Array.from(new Set(template));
}

/**
 * 求二次方
 */
function square(arr) {
    // 就是觉得 => 需要是单个表达式，而非{}
    return arr.map(item => item * item);
}

/**
 * 查找元素位置
 */
function findAllOccurrences(arr, target) {
    var x = 0;
    var tempArr = [];
    for (var i = 0; i < arr.length; i ++) {
        x = arr.indexOf(target, x);
        if (x !== -1) {
            tempArr.push(x);
            x++;
        } else {
            break;
        }
    }
    return tempArr;
}

/**
 * 避免全局变量
 */
function globals() {
    var myObject = {
       name : 'Jory'
     };
 
     return myObject;
 }

/**
 * 正确使用parseInt
 */
function parse2Int(num) {
    return parseInt(num,10);
}

/**
 * 完全相等
 */
function identity(val1, val2) {
    if(val1 === val2) {
        return true;
    } else {
        return false;
    }
  }

/**
 * 流程控制
 *  */ 
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 ===0) {
        return 'fizzbuzz';
    } else if (num % 3 === 0) {
        return 'fizz';
    } else if (num % 5 === 0) {
        return 'buzz';
    } else if (arguments.length === 0 || typeof num !== 'number') {
        return false;
    } else {
        return num;
    }
}

/**
 * 函数传参
 */
function argsAsArray(fn, arr) {
    return fn.apply(null, arr);
 }

/**
 * 函数上下文
 */
function speak(fn, obj) {
    return fn.call(obj);
}


/**
 * 返回函数
 */

function functionFunction(str) {
    return function (arg) {
        return str.concat(', ', arg);
    }
}

/**
 * 使用闭包
 */
function makeClosures(arr, fn) {
    var result = [];
    function inner (i) {
        return fn(arr[i])
    }
    for (var i = 0; i < arr.length; i ++) {
        result.push(inner.bind(null,i));
    }
    return result;
}

/**
 * 二次封装函数
 */
function partial(fn, str1, str2) {
    var result = function (str3) {
        return fn (str1, str2, str3);
    }
    return result;
}

/**
 * 使用arguments
 */
function useArguments() {
    var total = 0;
    for (var i =0; i < arguments.length; i ++) {
        total = arguments[i] + total;
    }
    return total;
}

/**
 * 使用apply调用函数
 */
function callIt(fn) {
    var arr = Array.from(arguments);
    arr.splice(0,1);
    return fn.apply(null, arr);
}


/**
 * 二次封装函数
 */

function partialUsingArguments(fn) {
    var arr = Array.from(arguments);
    arr.splice(0,1);

    var result = function () {
        var inner = Array.from(arguments);

        var argument = arr.concat(inner);
        return fn.apply(null,argument);
    }
    return result;
}

/**
 * 柯里化
 */
function curryIt(fn) {
    return function a (a1) {
        return function b (b1) {
            return function c (c1) {
                return fn(a1, b1, c1);
            }
        }
    }
}

/**
 * 或运算
 */

function or(a, b) {
    return a || b;
}

/**
 * 且运算
 */
function and(a, b) {
    return a && b;
}

/**
 * 二进制转换
 */
function valueAtBit(num, bit) {
    var binarySystem = String(num.toString(2));
    var arrBinary = binarySystem.split('');
    var rev = arrBinary.reverse();
    return rev[bit-1];
}

/**
 * 二进制转换
 */

function base10(str) {
    return parseInt(str, 2);
}

/**
 * 二进制转换
 */

function convertToBinary(num) {
    var binary = num.toString(2);
    if(Number(binary.length) >= 8) {
        return binary;
    } else {
        var binaryArr = binary.split('');
        while(binaryArr.length<8) {
            binaryArr.unshift('0');
        }
        return binaryArr.join('');
        
    }
}


/**
 * 改变上下文
 */
function alterContext(fn, obj) {
    return fn.call(obj);
}

/**
 * 批量给变对象的属性
 */
function alterObjects(constructor, greeting) {
    constructor.prototype.greeting = greeting;
    return new constructor();
}

/**
 * 属性遍历
 */
function iterate(obj) {
    var arr = [];
    var string;
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            string = key + ": " + obj[key];
            arr.push(string);
        }
    }
    return arr;
}

/**
 * 判断是否包含数字
 */

function containsNumber(str) {
    return /\d/g.test(str);
}

/**
 * 判断是否已元音字母结尾
 */
function endsWithVowel(str) {
    return /[aeiou]$/i.test(str);
}