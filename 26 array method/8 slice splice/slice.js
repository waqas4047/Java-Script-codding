var a=["hello","waqas","imran","adil"];
console.log(a);
var b=a.slice(1,3);//by this method we can create new array we have give here starting index and end index i give one starting index because i want to create new from waqas and imran so i give index 1 as starting and 3 as ending index but it will not print value of index 3 it will print value one less then index 3.so that value it imran.
console.log(b);
var c=a.concat(b);
console.log(c);
var d=a.slice(2);//its mean select all items from in the array  start from index 2 upto end of the array because here we only point start of the array;
console.log(d); 
console.log("***********************");
console.log("we can also give negative number to slice end and start");
var g=a.slice(-3);/// it will print value from 3rd last of the array upto end;
console.log(g);
var g=a.slice(-3,-1);/// -1 is the last value in array so it will print second last value because the end value goes to one less ;
console.log(g);