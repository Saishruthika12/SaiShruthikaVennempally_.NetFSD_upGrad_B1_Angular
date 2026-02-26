class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`"hello,my name is ${this.name} and iam ${this.age} years old"`);
    }
}
let person1=new Person('sai',21);
person1.greet();