// process.stdout.write("hello ")
// process.stdout.write("World")


let prompt = require('prompt-sync')();

// let a = prompt("Enter a number ")
// process.stdout.write(a)


// for (let i = 0; i < 50; i++) {
//     process.stdout.write("x ")
// }

let n = Number(prompt("Enter a number "))

// // base pattern
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         process.stdout.write("* ")
//     }
//     console.log()
// }


// right angle tringle
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log();
// }


// right anngle character
// for (let i = 1; i <= n; i++) {
//     let ch = 65
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(String.fromCharCode(ch) + " ")
//         ch++;
//     }
//     console.log()
// }


// // ulta tringle

// for (let i = 1; i <= n; i++) {
//     for (let j = n; j >= i; j--) {
//         process.stdout.write(j + " ")
//     }
//     console.log()
// }


// mirror right angle
//      *
//     **
//    ***
//   ****
// for (let i = 1; i <= n; i++) {
//     for (let j = n; j > i; j--) {
//         process.stdout.write("  ")
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log();
// }


// x pattern 

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (i == j || (i + j) == 6) {
//             process.stdout.write("* ")
//         } else {
//             process.stdout.write("  ")
//         }
//     }
//     console.log();

// }



//  v pattern
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= 2 * n; j++) {
//         if (i == j || (i + j) == 2 * n) {
//             process.stdout.write("* ")
//         } else {
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }


// const n = 7; // height of the B

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (
//             j == 1 || // left vertical line
//             (i == 1 && j < n) || // top horizontal line
//             (i == Math.ceil(n / 2) && j < n) || // middle horizontal line
//             (i == n && j < n) || // bottom horizontal line
//             (j == n && i != 1 && i != Math.ceil(n / 2) && i != n) // right vertical curves
//         ) {
//             process.stdout.write("* ");
//         } else {
//             process.stdout.write("  ");
//         }
//     }
//     console.log();
// }


function getCharPattern(char, row) {
    switch (char) {
        case 'A': return ["  *  ", " * * ", "*   *", "*****", "*   *", "*   *", "*   *"][row];
        case 'B': return ["**** ", "*   *", "*   *", "**** ", "*   *", "*   *", "**** "][row];
        case 'C': return [" ****", "*    ", "*    ", "*    ", "*    ", "*    ", " ****"][row];
        case 'D': return ["**** ", "*   *", "*   *", "*   *", "*   *", "*   *", "**** "][row];
        case 'E': return ["*****", "*    ", "*    ", "**** ", "*    ", "*    ", "*****"][row];
        case 'F': return ["*****", "*    ", "*    ", "**** ", "*    ", "*    ", "*    "][row];
        case 'G': return [" ****", "*    ", "*    ", "*  **", "*   *", "*   *", " ****"][row];
        case 'H': return ["*   *", "*   *", "*   *", "*****", "*   *", "*   *", "*   *"][row];
        case 'I': return ["*****", "  *  ", "  *  ", "  *  ", "  *  ", "  *  ", "*****"][row];
        case 'J': return ["  ****", "    *", "    *", "    *", "*   *", "*   *", " *** "][row];
        case 'K': return ["*   *", "*  * ", "* *  ", "**   ", "* *  ", "*  * ", "*   *"][row];
        case 'L': return ["*    ", "*    ", "*    ", "*    ", "*    ", "*    ", "*****"][row];
        case 'M': return ["*   *", "** **", "* * *", "*   *", "*   *", "*   *", "*   *"][row];
        case 'N': return ["*   *", "**  *", "* * *", "*  **", "*   *", "*   *", "*   *"][row];
        case 'O': return [" *** ", "*   *", "*   *", "*   *", "*   *", "*   *", " *** "][row];
        case 'P': return ["**** ", "*   *", "*   *", "**** ", "*    ", "*    ", "*    "][row];
        case 'Q': return [" *** ", "*   *", "*   *", "*   *", "* * *", "*  * ", " ** *"][row];
        case 'R': return ["**** ", "*   *", "*   *", "**** ", "* *  ", "*  * ", "*   *"][row];
        case 'S': return [" ****", "*    ", "*    ", " *** ", "    *", "    *", "**** "][row];
        case 'T': return ["*****", "  *  ", "  *  ", "  *  ", "  *  ", "  *  ", "  *  "][row];
        case 'U': return ["*   *", "*   *", "*   *", "*   *", "*   *", "*   *", " *** "][row];
        case 'V': return ["*   *", "*   *", "*   *", "*   *", " * * ", " * * ", "  *  "][row];
        case 'W': return ["*   *", "*   *", "*   *", "*   *", "* * *", "** **", "*   *"][row];
        case 'X': return ["*   *", "*   *", " * * ", "  *  ", " * * ", "*   *", "*   *"][row];
        case 'Y': return ["*   *", "*   *", " * * ", "  *  ", "  *  ", "  *  ", "  *  "][row];
        case 'Z': return ["*****", "    *", "   * ", "  *  ", " *   ", "*    ", "*****"][row];
        default: return "     ";
    }
}

function printNamePattern(name) {
    name = name.toUpperCase();
    for (let row = 0; row < 7; row++) {
        let line = '';
        for (let ch of name) {
            line += getCharPattern(ch, row) + '  ';
        }
        console.log(line);
    }
}

// Example: call function with any name
printNamePattern("vaishu");

