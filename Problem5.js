//**Factorial of N */

// Method No: 1
let num = 5
let i = 1
let prod = 1

for ( num;  num >= i; num--) {
    prod *= num
}
console.log(prod);

//**Method No:2 **Recommended */

let num2 = 5
let prod2 = 1

for (let i = 1; i <= num2; i++) {    
    prod2 *= i
}
console.log(prod2);
