const a=33;
// a=43;
// console.log(a);//it will give us error because we can not initialze const datatype variable but;
const arr=[33,45,52,87];
// arr=[45,98,99,93];
// console.log(arr);//it will also give error beacuse we not change all complete value of array but we can change one by one data of array see below;
arr[3]=555;
console.log(arr);
//just like array we can not change the object completly but can assign one by one value
//se bellow
const obj={
    name:'shan',
    lanme:'jan',
    age:33
};
// obj={
//     name:'jfjf',
//     lname:'dfss',
//     age:33
// };this will not work but if we chnage one by one then it will work
obj.name="waqas khan"
console.log(obj);