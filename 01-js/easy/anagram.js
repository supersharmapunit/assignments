/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let n = str1.length, m = str2.length;
  if(n != m) return false;
  else return checkAnagram(str1.toLowerCase(), str2.toLowerCase());
}

function checkAnagram(str1, str2) {
  let arr = [];
  for (let i = 0; i < str1.length; i++) {
    arr.push(str1.charAt(i));
  }
  for (let i = 0; i < str2.length; i++) {
    if (!arr.includes(str2.charAt(i))) return false;
  }
  return true;
}

module.exports = isAnagram;
