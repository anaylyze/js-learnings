// let cities = ['delhi','mumbai','bengaluru','hyderabad','panaji','bhopal']
// const index = cities.indexOf('panaji');
// console.log (index)
// if (index !== -1) {
//     cities.splice(index,4)
// }
// console.log(cities)

let arr = [1,2,3,4,5,6,7,8,9,10];
function even(arr){
    evenArr = [];
    for (let i=0; i<arr.length; i++){
        if (arr[i]%2==0){
            evenArr.push(arr[i])
        }
    } console.log(evenArr);
}

even(arr)