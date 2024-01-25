//run the program in firstchildwebsite and it will print the first child of inner id which is h2
var a=document.getElementById("inner").firstElementChild;
console.log(a);
//this will conver the color to red of h2
document.getElementById("inner").firstElementChild.style.color="red";
//this will red the color of last child of id inner which is E
document.getElementById("inner").lastElementChild.style.color="red";
//fistchid and lastchild will print the all thing in id inner includeing spaces text enter etc
var b=document.getElementById("child-c").firstChild;
console.log(b);
var b=document.getElementById("child-c").lastChild;
console.log(b);