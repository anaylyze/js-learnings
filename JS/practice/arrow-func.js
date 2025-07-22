// const greet = (name) => console.log("Namaste "+name+'!');
// greet('anay');
// greet('messi');
// greet('manu');
// greet('manas');

// const sum = (a,b) => console.log(a+b);
// sum(2,3);
// sum(12,13);
// sum(22,33);
// sum(29,31);

// const num = (a) => console.log(2*a);
// num(5);
// num(8);
// num(7);
// num(6);


// const evenOdd = (a) => {
//     if(a%2==0){
//         console.log('even numbeer');
//     } else{
//         console.log('odd number');
//     }
// }

// evenOdd(2);
// evenOdd(3);
// evenOdd(4);
// evenOdd(5);


// const string = (str) => console.log(str.toUpperCase());
// string('niggga');
// string('baawe tu kha waste phook bharu kagaz mei');
// string('hizru my own g');
// string('wassup baby boy');

// const first = (str) => console.log(str[0]);
// first('ANAY');
// first('oooo rajaji ek ka re ka rahlai haa zaroorat mohan');
// first('Chaar charag tere baran hamesha');
// first('nigga maarda aaye');

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// const square = numbers.map((number) => Math.pow(number,2));
// const three = numbers.map((number) => Math.pow(number,3));
// console.log(square);
// console.log(three);

// const square = (numbers) => numbers.map(number => number**2); 
// const three = (numbers) => numbers.map(number => number**3);
// console.log(square(numbers)); 
// console.log(three(numbers)); 


// const even = (numbers) => numbers.filter(n => n%2==0);
// console.log(even(numbers));

// setTimeout(function(){
//     console.log('nakamurakami')
// },5000)

// const total = (numbers) => numbers.reduce((acc,num)=> acc+num);
// console.log(total(numbers));

// const double = numbers.map((number)=> Math.pow(number,2))
// console.log(double);

// const sorted = (numbers) => numbers.sort((a,b) => b-a);
// console.log(sorted(numbers));

// const sorted = numbers.sort((a,b)=>b-a);
// console.log(sorted)

// const strings = ['jdanS','HBDH','hduuyewuubf','jdsncu','jdns']
// const big = (strings) => strings.filter(str => str.len>4);
// console.log(big(strings));

// const capital = strings.map((str) => (str.toUpperCase()));
// console.log(capital);

// const hello = (names) => console.log(`Hello, `+[names]+`!`);
// (hello('anay'));
// (hello('yana'));
// (hello('ishay'));
// (hello('manas'));

// const str1 = 'Anay Is A Good Boy';

// const vowel = (str1) => {
//     let count =0;
//     const vowelSet ='aeiouAEIOU';

//     for(let i=0; i<str1.len; i++){
//         if(vowelSet.includes(str1[i])){
//             count++;
//         }
//     } 
//     return count;

// }

// console.log(vowel(str1));

// const strings = ['jdanS','HBDH','hduuyewuubf','jdsncu','jdns'];
// // const len =[];
// const long = (strings) => {
//     const lengths = strings.map(str=>str.length);
//     lengths.sort((a,b) => b-a);
//     return lengths[0];

// }
    
// console.log(long(strings));


// let numbers = [1,2,3,4,5,6,7,8,9,10];

// const double = (num) => num.map(num => num*2);

// const addThree = (num) => num.map(num => num+3);

// const composed = (num) => addThree(double(num))


// // console.log(double(numbers));
// // console.log(addThree(numbers));
// console.log(composed(numbers));