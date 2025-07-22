
const randomInt = Math.floor(Math.random()*10)+1
console.log(randomInt)

function calculate(a,o,b) {
    switch(o){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            if(b===0){
                return 'b is invalid'
            }
            return a/b;
        default:
            return 'enter a valid input like +,-,*,/'
    }
}
console.log(calculate(69,'*',69))
