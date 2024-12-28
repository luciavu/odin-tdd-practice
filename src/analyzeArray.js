export default function analyzeArray(numbers) {
  if (numbers.length === 0) {
    return { average: 0, min: 0, max: 0, length: 0 };
  }
  return {
    average: numbers.reduce((prev, cur) => prev + cur, 0) / numbers.length,
    min: numbers.reduce((prev, cur) => (prev < cur ? prev : cur)),
    max: numbers.reduce((prev, cur) => (prev > cur ? prev : cur)),
    length: numbers.length,
  };
}
