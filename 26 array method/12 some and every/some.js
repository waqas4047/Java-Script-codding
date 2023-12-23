var arr=[11,7,2,5,6];
var b=arr.some(adultage);//in some method we will pass a value and for that we will make a function and in that funciton we will pass a parameter which will see the array now in this array ther is no value which is grater than 16 so it will print false;
console.log(b);
function adultage(age){
    return age>=16;
}