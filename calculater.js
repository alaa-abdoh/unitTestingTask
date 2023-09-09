function calculater(numbers) { // ex : numbers = [1, +, 2]
    if (!Array.isArray(numbers) || numbers.length < 3) {
      throw new Error("Invalid input");
    }
  
    let result = numbers[0];
    for (let i = 1; i < numbers.length - 1; i += 2) {
      const operator = numbers[i];
      const operand = numbers[i + 1];
  
      if (typeof operand !== 'number') {
        throw new Error("Invalid input type");
      }
  
      if (operand > 1000) {
        continue;
      }
  
      if (operator === '+') {
        result += operand;
      } else if (operator === '-') {
        result -= operand;
      } else if (operator === '*') {
        result *= operand;
      } else if (operator === '/') {
        if (operand === 0) {
          throw new Error("Division by zero");
        }
        result /= operand;
      } else {
        throw new Error("Invalid operator");
      }
    }
  
    return result;
  }
  