// js对象的深拷贝
const o = {
    age: 24,
    name: 'san',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b']
}

const a = [1, 2, [3, [4]]];

const oo = deepClone(o);
oo.age = 12;
oo.address.city = 'shanghai';
console.log(o);
console.log(oo);

const aa = deepClone(a);
aa[1] = 88;
aa[2][0] = 99;
console.log(a);
console.log(aa);

/** @param {Object} obj 想要拷贝的对象
 *  针对对象和数组，返回一个深度拷贝的对象
 * 1. 先判断传入实参的变量类型，
 */
function deepClone(obj) {
    if (typeof obj !== 'object' || obj == null) {
        // 若不是对象和数组类型，或者obj是null，直接返回
        return obj;
    }

    // 初始化返回结果
    let result;
    if (obj instanceof Array) {
        result = [];
    } else {
        result = {};
    }

    for (let key in obj) {
		// 保证key 不是原型上的属性
        if (obj.hasOwnProperty(key)) {
			// 递归克隆子对象
			result[key] = deepClone(obj[key])
        }

    }

    // 返回结果
    return result;
}

Object.prototype.toString.call(obj).slice(8, -1)
//可以得到真实类型  
//String Number Boolean Undefined Object Array Function Null RegExp Math Date


// let arr = [2, 3, 4, 5, 6];

// let count = countInArr(...arr);

// console.log(count); //?

// function countInArr(){
//     return Array.prototype.slice.call(arguments).reduce((a, b) => {
//         return a+b;
//     });
// }
