import { Controller } from "./Controller";

function destroy(request: object, response: object) : any{
    return response;
}

function sayHello(request: string, response: string){
    console.log("hello");
}

class UserController extends Controller{
    constructor(){
        super({table: "users"});
    }
    @sayHello
    index(){
        return "123";
    }
}