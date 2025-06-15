const arr = [6, 6, 5];

let count = 1;
let ans = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (count == 0) {
        ans = arr[i]
        count++
    } else {
        if (arr[i] == ans) {
            count++;
        } else {
            count--
        }
    }
}
console.log(ans)