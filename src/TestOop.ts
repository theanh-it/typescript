//Decorator

function logging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let func: Function = target[propertyKey];
    console.log(`method "${func.name}" da goi luc ${new Date().toISOString()}`);
}

class Friend {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    @logging
    hello() {
        console.log(this.name + " says: Hello")
    }
}

let friend = new Friend("le huu dung");
friend.hello();