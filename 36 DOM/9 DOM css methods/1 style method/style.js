var a;
a=document.querySelector("#top").style.border;
console.log(a);
var a=document.querySelector("#top").style.color;//it will print nothing bc color property is not defind 
//in the style ;
console.log(a);
//set background color
document.querySelector("#top").style.backgroundColor="gray";