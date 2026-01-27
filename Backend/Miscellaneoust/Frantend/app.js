//Constractor
function Person(name, age) {
    this.name = name;
    this.age = age;

}
let p1 = new Person("Eve", 25);
console.log(p1);
console.log(p1.name);

//Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    talk() {
        console.log(`Hello i name is ${this.name}`);
    }
}
let p1= new Person("Mony",19);
console.log(p1);
console.log(p1.talk());

 //Inheritance
class Person{
    constructor(name,age){
    this.name=name;
    this.age=age;
    }
    talk(){
        return "Hello";
        
    }
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
}

let p1=new Student("Bory",21,89.05);
console.log(p1);
console.log("Student marks  :",p1.marks);
console.log(p1.talk());





