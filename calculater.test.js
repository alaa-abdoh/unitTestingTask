const calculater = require('./calculator');

describe('Calculator', () => {
  // Test case: Addition
  it('should return the correct sum of two numbers', () => {
    expect(calculater([2, '+', 3])).toBe(5);
  });

  // Test case: Subtraction
  it('should return the correct difference of two numbers', () => {
    expect(calculater([5, '-', 2])).toBe(3);
  });

  // Test case: Multiplication
  it('should return the correct product of two numbers', () => {
    expect(calculater([4, '*', 6])).toBe(24);
  });

  // Test case: Division
  it('should return the correct quotient of two numbers', () => {
    expect(calculater([10, '/', 2])).toBe(5);
  });

  // Test case: Division by zero
  it('should throw an error when dividing by zero', () => {
    expect(() => calculater([6, '/', 0])).toThrow('Division by zero');
  });

  // Test case: Negative numbers
  it('should handle negative numbers correctly', () => {
    expect(calculater([-8, '+', 5])).toBe(-3);
  });

  // Test case: Decimal numbers
  it('should handle decimal numbers correctly', () => {
    expect(calculater([3.5, '*', 2])).toBe(7);
  });

  // Test case: Order of operations
  it('should follow the correct order of operations', () => {
    expect(calculater([2, '+', 3, '*', 4])).toBe(14);
  });

  // Test case: Invalid operator
  it('should throw an error for an invalid operator', () => {
    expect(() => calculater([5, '$', 3])).toThrow('Invalid operator');
  });

  // Test case: Invalid input type
  it('should throw an error for invalid input types', () => {
    expect(() => calculater(['2', '+', 3])).toThrow('Invalid input type');
  });

  // Test case: Numbers greater than 1000
  it('should ignore numbers greater than 1000', () => {
    expect(calculater([2, '+', 1001, '*', 4, '/', 2])).toBe(4);
  });
});
