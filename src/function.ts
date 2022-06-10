function sum(x: number, y: number) : number{
    return x + y;
}

function say(content: string) : string{
    return content;
}

function getStudentList(data: any[]) : any[]{
    return data.filter(e=>e.is_student==1);
}

// cú phap khai bao function

var average = function(a: number, b: number, c: number) : number{
    return (a + b + c)/3;
}

var average: (a: number, b: number, c: number) => number = function(a, b, c){
    return (a + b + c)/3;
}

var average = (a: number, b: number, c:number) : number => {
    return (a + b + c)/3;
}