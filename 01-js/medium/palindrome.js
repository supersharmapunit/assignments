/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str == undefined || !str || str == '') return true;
  str = str.replace(/[^a-zA-Z ]/g, "").split(' ').join('').toLowerCase();
  let i = 0, j = str.length-1;
  while( i < j ) {
    let ch1 = str.charAt(i++), ch2 = str.charAt(j--);
    if(ch1 != ch2) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
