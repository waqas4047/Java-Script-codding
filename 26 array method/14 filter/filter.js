var a=[2,3,33,54,6,7,87,96];
console.log(a);
var b=a.filter(checkadult);//filter function search the array and make another array for item which match the condition;
console.log(b);
function checkadult(age){
    return age>=16;
}