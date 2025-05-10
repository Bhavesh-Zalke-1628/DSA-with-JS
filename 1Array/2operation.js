
const arr = [2, 4, 5, 30, 1]

// sum of array element
// let sum = 0;
// console.log(arr.length)
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + i;
// }

// console.log(sum)

// // max number
// let max = arr[0]
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max)


// // min number
// let min = arr[0]
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log(min)


// // second largest
// let max = Math.max(arr[1], arr[0])
// let sMax = Math.min(arr[1], arr[0])
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         sMax = max
//         max = arr[i]
//     } else if (arr[i] > sMax && arr[i] != max) {
//         sMax = arr[i]
//     }
// }
// console.log(max, sMax)



// // reversed the array
// const tempArray = new Array(arr.length);
// let j = 0;
// // console.log(arr)
// for (let i = arr.length - 1; i >= 0; i--) {
//     tempArray[j] = arr[i]
//     j++
// }
// console.log(tempArray)


// // without extra space

// let i = 0
// let j = arr.length - 1
// while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp
//     i++;
//     j--
// }
// console.log(arr)



// // arranage the zero and one
// const arr = [0, 1, 0, 1, 1, 0, 0, 1, 0]

// let i = 0, j = 0;
// while (i != arr.length) {
//     if (arr[i] == 0) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp
//         j++;
//     }
//     i++
// }
// console.log(arr)



// postive and neagative array arrange
// const arr = [-1, 2, 5, -10, -25, 63]
// let i = 0, j = 0;
// while (i != arr.length) {
//     if (arr[i] > 0) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
//     i++;
// }
// console.log(arr)