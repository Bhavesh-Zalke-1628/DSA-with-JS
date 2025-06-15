"use strict";

var str = 'mAdAm'; // //  print each character at new line
// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i))
// }
// // reverse the string
// let rev = ""
// for (let i = str.length - 1; i >= 0; i--) {
//     rev = rev + str.charAt(i)
// }
// console.log(rev)
// // palindrome check
// let rev = ""
// for (let i = str.length - 1; i >= 0; i--) {
//     rev = rev + str.charAt(i)
// }
// if (str === rev) {
//     console.log("Palindrome")
// }
// else {
//     console.log("Not a Palindrome")
// }
// // palindrome check using while loop
// let i = 0;
// let j = str.length - 1;
// let isPalindrome = true;
// while (i < j) {
//     if (str.charAt(i) != str.charAt(j)) {
//         isPalindrome = false;
//         break
//     }
//     i++;
//     j--
// }
// console.log(isPalindrome ? "Palindrome" : "Not a Palindrome")
// toogle the case of each character

var toggled = "";

for (var i = 0; i < str.length; i++) {
  var _char = str.charAt(i);

  if (_char === _char.toUpperCase()) {
    toggled += _char.toLowerCase();
  } else {
    toggled += _char.toUpperCase();
  }
}

console.log(toggled); // frequency of each character

var frequency = {};

for (var _i = 0; _i < str.length; _i++) {
  var _char2 = str.charAt(_i);

  if (frequency[_char2]) {
    frequency[_char2]++;
  } else {
    frequency[_char2] = 1;
  }
}

console.log(frequency); // count vowels and consonants

var vowels = "aeiouAEIOU";
var vowelCount = 0;
var consonantCount = 0;

for (var _i2 = 0; _i2 < str.length; _i2++) {
  var _char3 = str.charAt(_i2);

  if (vowels.includes(_char3)) {
    vowelCount++;
  } else if (_char3.toLowerCase() !== _char3.toUpperCase()) {
    // check if it's a letter
    consonantCount++;
  }
}

console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount); // count words in a string

var sentence = "Hello World! This is a test.";
var wordCount = 0;
var words = sentence.split(" ");

for (var _i3 = 0; _i3 < words.length; _i3++) {
  if (words[_i3].trim() !== "") {
    // check for non-empty words
    wordCount++;
  }
}

console.log("Word Count:", wordCount);