const arr = [1, 2, 3, 4, 5, 6, 7];

const target = 6;
const fisrt = 0;
const last = arr.length - 1;
console.log(last)
function binarySearcha(arr, fisrt, last, target) {

    console.log(arr)
    while (fisrt <= last) {
        let mid = Math.floor((fisrt + last) / 2);
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) fisrt = mid + 1
        else last = mid - 1
    }
}

const res =
    binarySearcha(arr, fisrt, last, target)

console.log(res)