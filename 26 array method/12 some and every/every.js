var arr=[22,33,2,5,6];
var b=arr.every(adultage);//in every method it will see the condition and that every item in the arra should grater than 16 in this case;
//it will give us falese because every element in the array is not grater than 16;
console.log(b);
function adultage(age){
    return age<=16;
}