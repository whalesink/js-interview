/**
 * 简易jquery的实现 考虑插件和扩展性
 */

class jQuery {
    // dom查询
    constructor(selector){
        const result = document.querySelectorAll(selector);
        const length = result.length;
        for(let i = 0; i < length; i++){
            this[i] = result[i]
        }

        this.length = length;
        this.selector = selector;
    }

    get(index){
        return this[index];
    }

    // 
    each(fn){
        for(let i = 0; i < this.length; i++){
            const elem = this[i];
            fn(elem);
        }
    }


    // 事件
    on(type, fn){
        return this.each(elem => {
            elem.addEventListener(type, fn, false);
        });
    }

}

// 插件机制
jQuery.prototype.dialog = function(msg){
    alert(msg);
}


// 复写机制（造轮子）
class newJquery extends jQuery{
    
    constructor(selector){
        super(selector);
    }

    // 扩展自己的方法
    addClass(className){

    }

    css(key, value){

    }
}