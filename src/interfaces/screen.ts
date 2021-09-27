export function AddOperation(num1:number, num2:number){
    return num1+num2;
}

export function MinusOperation(num1:number, num2:number){
    return num1-num2;
}

export function DivOperation(num1:number, num2:number){
    return num1/num2;
}

export function MulOperation(num1:number, num2:number){
    return num1*num2;
}

export interface operation{
    Add:boolean;
    Minus:boolean;
    Divide:boolean;
    Multiply:boolean;
}