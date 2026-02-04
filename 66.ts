interface Student {
    name: string;
    age: number;
}
class School implements Student {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
let s = new School("Akshit", 21);
console.log(s.name, s.age);
