var a=[12,3,4,7,54];
var b=a.find(adultage);
console.log("the first grater age in this array grater than 16 is " + b);
var c=a.findIndex(adultage);//find method will search for an item and will print that but it will print the firt value on which the conditon become true.
console.log("and its index is " + c);
function adultage(age){
    return age>=18;
}