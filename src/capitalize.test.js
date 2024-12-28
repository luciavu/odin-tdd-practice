import capitalize from './capitalize';

test('hamster capitalized is Hamster', () => {
  expect(capitalize('hamster')).toBe('Hamster');
});
