//**Print the even number */

// Method No:1

// let num = 10

// for(let i = 2; i <= num; i += 2){
//     console.log(i);
// }

// Method No:2 // **Recommended

let num = 10

for(let i = 1; i <= num; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}