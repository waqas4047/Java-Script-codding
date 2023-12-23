var a=[12,3,4,7,54];
var b=a.find(adultage);//find method will search for an item and will print that but it will print the firt value on which the conditon become true.
console.log(b);
function adultage(age){
    return age>=18;
}