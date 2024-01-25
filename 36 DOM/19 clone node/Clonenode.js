var target=document.getElementById("list").children[0];
var copy=target.cloneNode(true);//if i write false here it will copy tags only
document.getElementById("list2").appendChild(copy);
document.getElementById("test").appendChild(copy);//we can also copy it to a div