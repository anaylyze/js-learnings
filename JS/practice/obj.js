// Create an object for your profile (name, age, college, skills).
// myProfile = {
//     name:'anay jha',
//     age:20,
//     college:'bpit delhi',
//     skills:'html-css-js'
// }
// console.log(myProfile.skills)

// Create an array of 5 students, print names of those with age > 20.

students = [{
    name:'anay',
    age:29
},{
    name:'manas',
    age:31
},{
    name:'manu',
    age:2
},{
    name:'prashant',
    age:90
},{
    name:'varenyam',
    age:12
},{
    name:'daksh',
    age:17
}]

function ole(students){
    let nameArr =[];
    for (let i=0;i<students.length;i++){
        if(students[i].age>20){
            nameArr.push(students[i].name)
        } 
    }console.log(nameArr);
}
ole(students);
