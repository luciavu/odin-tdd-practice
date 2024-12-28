// Encrypt string by shifting each character by a shift factor
export default function caesarCipher(string, shiftFactor) {
  let encryptedString = '';

  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    // Punctuation remains unchanged. Add to string, skip loop.
    if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
      encryptedString += string.charAt(i);
      continue;
    }
    // Adjust shiftFactor into postive shift < 26
    shiftFactor = ((shiftFactor % 26) + 26) % 26;
    // ASCII codes: a-z (97-122), A-Z (65-90)
    const bound = charCode <= 90 ? 65 : 97; // Upper or lower case bound
    charCode = ((charCode - bound + shiftFactor) % 26) + bound;
    encryptedString += String.fromCharCode(charCode);
  }
  return encryptedString;
}
