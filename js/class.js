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



// 构造父类
class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(food){
        alert(`${this.name} are eating ${food}`);
    }
}

// 构造子类
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
console.log(zhang);
console.log(li);

typeof Teacher; // function
typeof People;  // function
// 通过typeof检查可以发现，class就是语法糖！事实上就是es5的构造函数原型继承