var newelement="<h2>so be care full every were</h2>";
var target=document.getElementById("text");
target.insertAdjacentHTML("afterbegin",newelement);//in this we put full element directly in new element
//we create whole element
target.insertAdjacentHTML("beforebegin",newelement);//
target.insertAdjacentHTML("beforeend",newelement);//
target.insertAdjacentHTML("afterend",newelement);//like inset adjecent element
