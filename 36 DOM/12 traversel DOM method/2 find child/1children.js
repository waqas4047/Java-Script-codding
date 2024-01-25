//this will return the child of outer div in array;
var a=document.getElementById("outer").children;
console.log(a);
var a=document.getElementById("inner").children;
console.log(a);
//now if i want to target spesific child then i will do so
//now i can change its style
document.getElementById("inner").children[2].style.background="red";
document.getElementById("inner").children[2].style.color="white";
var a=document.getElementById("inner").children[0].innerHTML;
console.log(a);
//childNode and children are same but it childnode count enter text tage all
//eg;
var a=document.getElementById("inner").childNodes[1].style.background="red";
console.log(a);
