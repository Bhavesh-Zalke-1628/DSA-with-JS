// // console.log(Math.trunc(Math.random() * 9999) + 1000)



// // loop 
// const pr = prompt("Enter the n");
// if (pr === null) console.log("Cancelled");

// const n = Number(pr);
// if (isNaN(n) || n <= 0) console.log("Please enter a positive number");

// let sum = 1;
// for (let i = 1; i <= n; i++) sum *= i;
// console.log(sum);





const arr = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0]


var i = 0;
var j = 0;


while (arr[i] < arr.length) {
    if (arr[i] == 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}

console.log(arr)