const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

const left = new Array(arr.length);
const right = new Array(arr.length)

let maxLeft = arr[0];
let maxRight = arr[arr.length - 1]
left[0] = maxLeft;
right[right.length - 1] = maxRight
for (let i = 1; i < arr.length; i++) {
    maxLeft = Math.max(arr[i], maxLeft)
    left[i] = maxLeft
}

for (let i = arr.length - 2; i >= 0; i--) {
    maxRight = Math.min(arr[i], maxRight)
    right[i] = maxRight
}

let ans = 0;

for (let i = 0; i < arr.length; i++) {
    ans += Math.min(left[i], right[i]) - arr[i]
}

console.log(ans)