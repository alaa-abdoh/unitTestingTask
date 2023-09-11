function calculater(...args) {
    let result = args[0];
    for(let i=1; i<args.length; i+=2){
      if(typeof args[i+1] != "number" || typeof args[0] != "number")
        throw new Error("Invalid input type")
      else {
        let operation = args[i];
        switch(operation){
          case "+" :
            result += args[i+1];
            break;
          case "*" :
            result *= args[i+1];
            break;
          case "-" :
            result -= args[i+1];
            break;
          case "/" :
            if (args[i+1] != 0)  result /= args[i+1]
            else throw new Error("Division by zero"); 
            break;
          default:
            throw new Error("Invalid operator")  
        }
        return result
      }
  }
}
module.exports = calculater