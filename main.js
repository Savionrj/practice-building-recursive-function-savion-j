const input = require('readline-sync');
let word;

word = input.question('Enter a String to be reversed: ');
console.log(reverseString(word));

word = input.question('Enter a String to be reversed: ');
console.log(reverseString(word));

word = input.question('Enter a String to be reversed: ');
console.log(reverseString(word));

function reverseString(string) {
  if (string.length === 0) {
    return "";
  }
  return reverseString(string.slice(1)) + string.charAt(0);
}
