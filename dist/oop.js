"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getInfo() {
        return {
            name: this.name,
            age: this.age
        };
    }
}
var chicken = new Animal("chicken", 2);
console.log(chicken, chicken.getName(), chicken.getInfo());
// ke thua
class Chicken extends Animal {
    constructor(name, age, weight) {
        super(name, age);
        this.weight = weight;
    }
    getInfo() {
        return {
            name: this.name,
            age: this.age,
            weight: this.weight
        };
    }
}
class XeMay {
    constructor(ten, hang, namSX) {
        this.ten = ten;
        this.hang = hang;
        this.namSX = namSX;
    }
    getInfo() {
        return this;
    }
    getTen() {
        return this.ten;
    }
}
var xemay = new XeMay("theanh", "honda", 20);
console.log(xemay.getInfo());
