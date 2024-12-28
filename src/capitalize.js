// Take a string and returns it with the first character capitalized
export default function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
