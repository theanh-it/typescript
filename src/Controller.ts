export class Controller{
    protected model: object;

    constructor(model: object){
        this.model = model;
    }

    index(request: object, response:object) : any{
        return response;
    }

    show(request: object, response: object) : any{
        return response;
    }
}