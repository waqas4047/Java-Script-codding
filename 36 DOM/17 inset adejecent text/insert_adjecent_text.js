var newtext="<h1>some thing went wrong</h1>";
var target=document.getElementById("text");
target.insertAdjacentText("beforebegin",newtext);//it will print the above text as it is
target.insertAdjacentText("afterbegin",newtext);//it will print the above text as it is
target.insertAdjacentText("afterend",newtext);//it will print the above text as it is
target.insertAdjacentText("beforeend",newtext);//it will print the above text as it is
