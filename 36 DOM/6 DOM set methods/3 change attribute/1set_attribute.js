var a;
document.getElementById("top").setAttribute("class","branch");//this will change the value of a class
a=document.getElementById("top").getAttribute("class");//this will print the value of the class
console.log(a);
//in above code we change the value of class and for that value we change the css property in css file
//if you change the class value to back to heading then it css property will also be changed
document.getElementById("top").setAttribute("style","border:2px dotted yellow;");
//it will change the style value