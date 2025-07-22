// 1. Create a variable for each of the following: your favorite color, your height in centimeters, 
// and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

// const favColor = 'Black';
// let heightCms = 173;
// var likePizza = true;

// console.log(favColor);
// console.log(heightCms);
// console.log(likePizza);


// 2. Write a function sum that finds the sum of two numbers.

// function sum(a,b){
//     let numSum = a+b;
//     console.log(numSum);
// }

// sum(9,1)


// 3. Write a function called `canVote` that returns true or false if the `age` of a user is > 18

// function canVote(age){
//     if(age>18){
//         return 'Yes you can vote modi!';
//     } else{
//         return 'Naah you can not vote;(';
//     }
// }

// let a1 = canVote(19);
// let a2 = canVote(9);
// let a3 = canVote(92);

// console.log(a1);
// console.log(a2);
// console.log(a3);

//  4. Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even."
//  Otherwise, print "The number is odd."

// function evenOdd(num){
//     if(num % 2n === 0n){
//         console.log('the number is even');
//     } else {
//         console.log('it is odd')
//     }
// }

// evenOdd(2n) 
//  the n was added with numbers to get correct answers for int bigger tha 2^53-1



// 5.Write a function called sum that finds the sum from 1 to a number

// function sum(num){
//     total = 0
//     for(let i=0; i<=num; i++){
//         total = total+i;
//     } return total;
// }

// let add = sum(100);
// console.log(add)



// 6. Write a function that takes a user as an input and greets them with their name and age

// function greet(user){
//     console.log('helloo '+user.name+', you are '+user.age+' years old!')
// }

// user = {
//     name:'anay',
//     age:20
// }

// greet(user)

// 7. Write a function that takes a new object as input which has name , age and gender and greets the user with their gender 
// (Hi Mr/Mrs/Others harkirat, your age is 21)

// function greet(listPerson){
//     for(let i=0; i<listPerson.length; i++){
//         if(listPerson[i].gender=='male'){
//             console.log('hii Mr. '+listPerson[i].name+', your age is '+listPerson[i].age+'.')
//         } else if (listPerson[i].gender=='female'){
//             console.log('hii Ms. '+listPerson[i].name+', your age is '+listPerson[i].age+'.')
//         }
//     }
// }

// listPerson = [
//     {
//     name:'anay',
//     age:20,
//     gender:'male'
// }, {
//     name:'sanam',
//     age:12,
//     gender:'male',

// }, {
//     name:'ishay',
//     age:24,
//     gender:'female'
// }]

// greet(listPerson)

// 8.Also tell the user if they are legal to vote or not
// function vote(listPerson){
//     for(let i=0; i<listPerson.length; i++){
//         if(listPerson[i].gender=='male' && listPerson[i].age>18){
//             console.log('hii Mr. '+listPerson[i].name+', your age is '+listPerson[i].age+',therefore you can Vote.')
//         } else if (listPerson[i].gender=='female' && listPerson[i].age>18){
//             console.log('hii Ms. '+listPerson[i].name+', your age is '+listPerson[i].age+',therefore you can Vote.')
//         } else {
//             console.log('hii '+listPerson[i].name+', your age is '+listPerson[i].age+',therefore you cannot Vote.')
//         }
//     }
// }

// listPerson = [
//     {
//     name:'anay',
//     age:20,
//     gender:'male'
// }, {
//     name:'sanam',
//     age:12,
//     gender:'male',

// }, {
//     name:'ishay',
//     age:24,
//     gender:'female'
// }]

// vote(listPerson)


// 9. Write a function that takes an array of numbers as input, and returns a new array with only even values. 
// Read about filter in JS

// arr = [1,2,3,4,5,6,7,8,9,10];

// function evenNum(arr){
//     evenArr = [];
//     for (let i=0; i<arr.length; i++){
//         if (arr[i]%2==0){
//             evenArr.push(arr[i])
//         } 
//     } return evenArr;
// }

// let pay = evenNum(arr)
// console.log(pay) 

// let evenArr = arr.filter(num => num%2 === 0)
// console.log(evenArr)


// 10. Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

// listPerson = [
//     {
//     name:'anay',
//     age:20,
//     gender:'male'
// }, {
//     name:'sanam',
//     age:12,
//     gender:'male',

// }, {
//     name:'ishay',
//     age:24,
//     gender:'female'
// }]

// function adult(listPerson){
//     for (let i=0; i<listPerson.length; i++){
//         if(listPerson[i].age > 18) {
//             console.log('the list of adults is :' +listPerson[i].name)
//         }
//     }
// }
// adult(listPerson)

// let adult = listPerson.filter(obj => obj.age>18)
// console.log(adult)



// 11.Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male


// listPerson = [
//     {
//     name:'anay',
//     age:20,
//     gender:'male'
// }, {
//     name:'sanam',
//     age:121,
//     gender:'male',

// }, {
//     name:'ishay',
//     age:24,
//     gender:'female'
// }]

// function adultMale(listPerson){
//     for (let i=0; i<listPerson.length; i++){
//         if(listPerson[i].age > 18 && listPerson[i].gender=='male') {
//             console.log('the list of adult male is :' +listPerson[i].name)
//         }
//     }
// }
// adultMale(listPerson)

// let adultMale = listPerson.filter( list => list.age>18 && list.gender==='male')
// console.log(adultMale)


