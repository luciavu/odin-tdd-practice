import caesarCipher from './caesarCipher';

test('Cipher wraps z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Cipher preserves original lettercase', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Cipher does not change punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Negative shift', () => {
  expect(caesarCipher('abc', -3)).toBe('xyz');
});

test('Large shift', () => {
  expect(caesarCipher('Hello, World!', 107)).toBe('Khoor, Zruog!');
});
