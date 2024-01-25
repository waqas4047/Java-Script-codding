var newlist=document.createElement("li");
var newtext=document.createTextNode("guava")
newlist.appendChild(newtext);
var target=document.getElementById("list");
var oldelemet=target.children[0];
target.replaceChild(newlist,oldelemet);//so we replace orange by guava