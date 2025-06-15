const arr = [1, 2, 3, 4, 5]

// // left 1 rotation

const firstElement = arr[0]
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
arr[arr.length - 1] = firstElement;
console.log(arr)

// // right rotation

// let copy = arr[arr.length - 1]

// for (let i = arr.length - 1; i >= 1; i--) {
//     arr[i] = arr[i - 1];
// }
// arr[0] = copy;
// console.log(arr)


// Rotate by k element
// let k = Number(prompt("Enter the k value"))
// k = k % arr.length
// let count = 0
// for (let j = 1; j <= k; j++) {
//     count++
//     const copy = arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = copy
// }
// console.log(count)
// console.log(arr)


// kadane's algorithm
let maxSum = arr[0];
let currentSum = arr[0];
for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
}
console.log(maxSum);