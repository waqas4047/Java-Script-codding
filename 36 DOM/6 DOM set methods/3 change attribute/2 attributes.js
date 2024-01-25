var a;
a=document.getElementById("top").attributes;//by this we will find index of the attributes
console.log(a);
a=document.getElementById("top").attributes[1].value="branch";//by this method we can also change the value 
console.log(a);