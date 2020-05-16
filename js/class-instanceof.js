// 一个学生类
// class Student {
//     constructor(name, number){
//         this.name = name;
//         this.number = number;
//     }

//     sayOwnName(){
//         alert(this.name);
//     }
// };

// let zhang = new Student('张三', '44');
// console.log(zhang);



// 构造父类 People
class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(food){
        alert(`${this.name} are eating ${food}`);
    }
}

// 构造子类 Student
class Student extends People{
    constructor(name, number){
        // super将name传递给父类的constructor，使其代为处理
        super(name);

        this.number = number;
    }

    sayNum(){
        alert(`${this.name}的学号是${this.number}`);
    }
}

// 构造子类 Teacher
class Teacher extends People{
    constructor(name, major){
        // super将name传递给父类的constructor，使其代为处理
        super(name);

        this.major = major;
    }

    teach(){
        alert(`${this.name}是教${this.major}的老师`);
    }
}

const li = new Teacher('李书文', '语文');

const zhang = new Student('张三', '4510');
const z = new Student('张三', '4510');
// console.log(zhang);
// console.log(li);

typeof Teacher; // function
typeof People;  // function
// 通过typeof检查可以发现，class就是语法糖！事实上就是es5的构造函数原型继承


/**
 * 原型和原型链
 * 上面定义了一个父类People， 它有两个子类student teacher
 */

// console.log(Student.prototype.__proto__);                       // class People
// console.log(People.prototype);                                  // class People
// console.log(Student.prototype.__proto__ === People.prototype);  // true


// 通过instanceof 运算符可以判断一个对象是否是一个类的实例

console.log(Teacher instanceof People); // false    Teacher是类而不是实例
console.log(li instanceof Teacher);     // true     
console.log(li instanceof People);      // true

// instanceof 是基于原型实现的。
// 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。