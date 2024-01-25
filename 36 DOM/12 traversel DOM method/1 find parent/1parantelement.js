//by this method we can find the parent element of the tag and can also style that
//element
var a=document.getElementById("inner").parentElement;
console.log(a);
//by below method we change background color
document.getElementById("inner").parentElement.style.background="red";
//now we changing the background color of child c lets see
document.getElementById("child-c").parentElement.style.background="lightgreen";