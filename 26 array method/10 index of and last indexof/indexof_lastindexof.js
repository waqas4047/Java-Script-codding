var arr=["hello","how","ameen","jan","shaam","jan","hello"];
var b=arr.indexOf("how",0);//by indexof method we can find index of item which is in array and 0 is for, from where to start searching; here we are starting from index 0;
console.log(b);
var c=arr.indexOf("hello",3);// here we starting searching from index 3 and hello is on index 6.
console.log(c);
//if we put here the word which is not in array it will give us -1;which means that the item is not in array.
var d=arr.lastIndexOf("jan");//it will give us 5 because it start searching from the last  so it will give index of jan which is near hello so that jan is index 5
console.log(d);
var e=arr.lastIndexOf("jan",4);//it will start form index 4; and search item in left  side means first it will search data in index 4 then in 3 then 2 and so on;

console.log(e);