// let myDate = new Date()
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// myCreatedDate = new Date (2023, 0, 23, 23, 3)
// console.log(myCreatedDate.toLocaleString())


// let myCreatedDate = new Date("2023-01-04")
// let myCreatedDate = new Date("05-12-2004")
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date();
// console.log(newDate.toLocaleString());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`Today the Date is ${newDate.getDate()} and the time currently is ${Math.floor(newDate.getTime()/1000).toLocaleString()}.`)

// (newDate.toLocaleDateString('default',{
//     weekday: "long",
//     dateStyle:"full",
//     month:"long"
// }))


let today = new Date();
// console.log(today);

// console.log(today.getFullYear()); //2025
// console.log(today.getMonth()+1); //7 -> July
// console.log(today.getDay()); // 2->Tuesday
// console.log(today.getDate()); // 22
// console.log(today.getHours());//18
// console.log(today.getMinutes()); //26
// console.log(today.getSeconds()); //44

let birthday = new Date("2004-12-05")
console.log(birthday)
console.log((today.getFullYear()) - (birthday.getFullYear()) )
console.log((today.getMonth()) - (birthday.getMonth()) )
console.log((today.getDate()) - (birthday.getDate()) )


console.log(today.toDateString())