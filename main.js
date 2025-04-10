const input = require('readline-sync');
let word;

word = input.question('Enter a String to be reversed: ');
console.log(reverseString(word));

word = input.question('Enter a String to be reversed: ');
console.log(reverseString(word));

word = input.question('Enter a String to be reversed: ');
console.log(reverseString(word));

function reverseString(string) {
  let strLen = string.length;
  if (strLen === 0) {
    return "";
  }
  return string.charAt(strLen - 1) + reverseString(string.slice(0, strLen - 1));
}
