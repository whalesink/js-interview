// 作用域和闭包

// 函数作为返回值的闭包
// function create(){
//     let a = 100;
//     return function(){
//         console.log(a);
//     }
// }

// let fn = create();

// let a = 200;
// fn();   // 100

//——————————————————————————————————————

// 函数作为参数的闭包
// function print(fn){
//     let a = 200;
//     fn();
// }

// let a = 100;

// function fun(){
//     console.log(a);
// }

// print(fun);  // 100

/**
 * 闭包总结：
 *  自由变量的查找，是在函数定义的地方向上级作用域查找
 *  而不是函数执行的地方！！！
 */

//——————————————————————————————————————————————

/**
 *  this 的场景
 *      1. 作为普通函数调用
 *      2. call、apply、bind
 *      3. 作为对象的方法调用
 *      4. class方法中调用
 *      5. 箭头函数
 */

function fn1(){
    console.log(this);
}

fn1();      // window

fn1.call({x:199}); // {x: 199}

const fn2 = fn1.bind({x: 200});
fn2()       //{x: 200}
