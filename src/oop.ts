class Animal{
    name: string;
    age : number;

    constructor(name: string, age: number){
        this.name   = name;
        this.age    = age;
    }

    getName(){
        return this.name;
    }

    getInfo(){
        return {
            name    : this.name,
            age     : this.age
        }
    }
}

var chicken = new Animal("chicken", 2);

console.log(chicken, chicken.getName(), chicken.getInfo());

// ke thua
class Chicken extends Animal{
    weight: number;

    constructor(name: string, age: number, weight: number){
        super(name, age);
        this.weight = weight;
    }

    getInfo(){
        return {
            name: this.name,
            age: this.age,
            weight: this.weight
        }
    }
}

interface Xe{
    ten: string;
    hang: string;
    namSX: number;

    getInfo():any;
}

interface Action{
    getTen():string;
}

class XeMay implements Xe, Action{
    ten: string;
    hang: string;
    namSX: number;

    constructor(ten: string, hang: string, namSX: number){
        this.ten = ten;
        this.hang = hang;
        this.namSX = namSX;
    }

    getInfo() : any {
        return this;
    }

    getTen(): string {
        return this.ten;
    }
}

var xemay = new XeMay("theanh", "honda", 20);

console.log(xemay.getInfo());