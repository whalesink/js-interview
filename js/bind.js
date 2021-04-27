// bind函数做了什么？
// 返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。
function fn1(a, b, c){
    console.log(this);
    console.log(a, b, c);
    return 'this is fn1';
}

const fn2 = fn1.bind({x: 100}, 10, 20, 30);
const res = fn2()
console.log(res);



// 手动实现bind函数
Function.prototype.bind1 = function(){
    // 将参数解析为数组
    const args = Array.prototype.slice.call(arguments);
    // 获取this
    // 取出数组第一项，数组剩余的就是传递的参数
    const t = args.shift();
    const self = this;
    // 返回一个函数
    return function(){
        // 执行原函数，并返回结果
        return self.apply(t, args);
    }
}

const fnn = fn1.bind1({x: 100}, 10, 20, 30);
const ress = fnn();
console.log(ress);