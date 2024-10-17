export function add(a: number, b:number):number{
    return a+b
}

export function subtract(a:number , b:number): number{
    return a-b;
}

export function multiply(a: number, b:number):number{
    return a*b
}

export function divide(a: number, b: number): number{
    if(b==0){
        throw new Error("Cannot divide by 0");
    }
    return a/b
}

export function modulo(a: number, b: number):number{
    if(b==0){
        throw new Error("b cannot be 0")
    }
    return a%b
}

export function calculate(a: number, b: number, operator: string): number{
    switch (operator) {
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            return divide(a,b)
        case '%':
            return modulo(a,b)
        default:
            throw new Error("Invalid operator")
    }
}