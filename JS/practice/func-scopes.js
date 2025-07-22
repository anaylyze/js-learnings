// Create a function isEven(n) → returns true/false

// function isEvenBigInt(n) {
//     if(n%2n === 0n){
//         return true;
//     } else{
//         return false;
//     }
// }

// console.log(isEvenBigInt(283648196371931673168618961132n))



// Create a calculator using functions for +, -, *, /

function calculate(a,op,b){
    switch(op){
    case '+':
        return a+b;
        break;
    case '-':
        return a-b;
        break;
    case '*':
        return a*b;
        break;
    case '/':
        return a/b;
        break;
    default:
        return 'enter a valid op my g';
    }
}

console.log(calculate(5,'*',5))
