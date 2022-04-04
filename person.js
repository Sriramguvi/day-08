// class Person{
//     constructor(name,age,gender){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }

// gettitlename(){
//     return `name:${this.name} age: ${this.age} gender: ${this.gender}`;
      
//     }
// }

// var s1=new Person("sri",23,"Male");
// console.log(s1.gettitlename());

class Uber{
    constructor(km,amount){
        this.amount=amount;
        this.km=km;
        
    }

gettitlename(){
    return `km:${this.km} amount: ${this.amount*this.km}}`;
      
    }

}

var s1=new Uber(23,10);
console.log("one km per 10 rupees only");
console.log(s1.gettitlename());

