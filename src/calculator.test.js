import Calculator from './calculator';

const calculator = new Calculator();
test('Calculator: Add 1 + 2 is 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Calculator: Subtract 10 - 3 is 7', () => {
  expect(calculator.subtract(10, 3)).toBe(7);
});

test('Calculator: Multiply 3 * 9 is 27', () => {
  expect(calculator.multiply(3, 9)).toBe(27);
});

test('Calculator: Divide 100 / 10 is 10', () => {
  expect(calculator.divide(100, 10)).toBe(10);
});
