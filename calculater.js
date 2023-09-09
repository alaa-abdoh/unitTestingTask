function calculater(x, op1, y, op2, z){
    if(isNaN(x) || isNaN(y) || (z != undefined && isNaN(z))){
        throw new Error("Invalid input type")
    }
    else if(op1 == "+" && op2 == undefined){
        return x + y;
    }
    else if(op1 == "*" && op2 == undefined){
        return x * y;
    }
    else if(op1 == "-" && op2 == undefined){
        return x - y;
    }
    else if(op1 == "/" && op2 == undefined){
        if(y != 0) return x / y;
        else throw new Error("Division by zero")
    }
    else if(op1 == "+" && op2 == "*"){
        return x + y * x
    }
    else if(op1 == "+" && op2 == "/"){
        if(z != 0) return x + y / z;
        else throw new Error("Division by zero")
    }
    else if(op1 == "+" && op2 == "-"){
        return x + y - x
    }
    else if(op1 == "+" && op2 == "+"){
        return x + y + x
    }
    else if(op1 == "-" && op2 == "+"){
        return x - y + x
    }
    else if(op1 == "-" && op2 == "*"){
        return x - y * x
    }
    else if(op1 == "-" && op2 == "-"){
        return x - y - x
    }
    else if(op1 == "-" && op2 == "/"){
        if(z != 0) return x - y / z;
        else throw new Error("Division by zero")
    }
    else if(op1 == "*" && op2 == "*"){
        return x * y * x
    }
    else if(op1 == "*" && op2 == "+"){
        return x * y + x
    }
    else if(op1 == "*" && op2 == "-"){
        return x * y - x
    }
    else if(op1 == "*" && op2 == "/"){
        if(z != 0) return x * y / z;
        else throw new Error("Division by zero")
    }
    else if(op1 == "/" && op2 == "-"){
        if(y != 0) return x / y - z;
        else throw new Error("Division by zero")
    }
    else if(op1 == "/" && op2 == "+"){
        if(y != 0) return x / y + z;
        else throw new Error("Division by zero")
    }
    else if(op1 == "/" && op2 == "*"){
        if(y != 0) return x / y * z;
        else throw new Error("Division by zero")
    }
    else if(op1 == "/" && op2 == "/"){
        if(y != 0 && z!= 0) return x / y * z;
        else throw new Error("Division by zero")
    }
    else
        throw new Error ("Invalid operator")
}
module.exports = calculater;
