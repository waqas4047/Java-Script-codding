var a = {
    fname:'waqas',
    gender:'male',
    age:33,
    email:'waqs@khan.com'
}
for (var j in a){//for in loop is use when we want to print all the values of a object;
    console.log(j+": "+a[j]); //j will print the property and a[j] will print the value of the property;
}
