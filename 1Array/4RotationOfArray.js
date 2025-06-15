// const arr = [1, 2, 3, 4, 5]

// // left roatation
// const tempArr = new Array(arr.length)
// let k = 2;
// k = k % arr.length
// for (let i = 0; i <= arr.length - 1; i++) {
//     tempArr[i] = arr[(i + k) % arr.length]
// }
// console.log(tempArr)


// // right rotation 
// const tempArr = new Array(arr.length)
// let k = 2;
// k = k % arr.length
// for (let i = 0; i <= arr.length - 1; i++) {
//     tempArr[(i + k) % arr.length] = arr[i]
// }
// console.log(tempArr)


// let k = 3
// k = k % arr.length
// reverse(0, arr.length - 1)
// reverse(k, arr.length - 1)
// reverse(0, k - 1) 
// function reverse(i, j) {
//     while (i < j) {
//         let temp = arr[i];
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++;
//         j--
//     }
//     console.log(arr)
// }



// // merge the sorted array
// const arr1 = [1, 2, 6]
// const arr2 = [3, 5, 7, 9]
// const tempArr = new Array(arr1.length + arr2.length)
// console.log(tempArr.length)
// let i = 0;
// let j = 0;
// let k = 0;
// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//         tempArr[k] = arr1[i]
//         i++;
//     } else {
//         tempArr[k] = arr1[i]
//         j++
//     }
//     k++
// }

// while (j < arr2.length) {
//     tempArr[k++] = arr2[j++]
// }

// while (i < arr1.length) {
//     tempArr[k++] = arr1[i++]
// }

// console.log(tempArr)


// sort the color  
const arr = [0, 1, 0, 1, 0, 0, 2, 0, 1, 0, 2, 2, 1, 0];

let i = 0, j = 0, k = arr.length - 1;

while (i <= k) {
    if (arr[i] == 0) {
        // let temp = arr[i];
        // arr[i] = arr[j];
        // arr[j] = temp;
        [arr[i], arr[j]] = [arr[j], arr[i]]
        j++;
        i++;
    } else if (arr[i] == 2) {
        [arr[i], arr[k]] = [arr[k], arr[i]]
        k--;
    } else {
        i++
    }
}

console.log(arr)