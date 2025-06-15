let str = 'mAdAm';

// //  print each character at new line
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
let toggled = "";
for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char === char.toUpperCase()) {
        toggled += char.toLowerCase();
    } else {
        toggled += char.toUpperCase();
    }
}
console.log(toggled);

// frequency of each character
let frequency = {};
for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}
console.log(frequency);

// count vowels and consonants
let vowels = "aeiouAEIOU";
let vowelCount = 0;
let consonantCount = 0;
for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (vowels.includes(char)) {
        vowelCount++;
    } else if (char.toLowerCase() !== char.toUpperCase()) { // check if it's a letter
        consonantCount++;
    }
}
console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount);

// count words in a string
let sentence = "Hello World! This is a test.";
let wordCount = 0;
let words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
    if (words[i].trim() !== "") { // check for non-empty words
        wordCount++;
    }
}
console.log("Word Count:", wordCount);  