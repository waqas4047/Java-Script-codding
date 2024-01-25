//to print the inner text by class firsst we need to find his index we can find index by bellow method
var element;
element=document.getElementsByClassName("list");//by this we have find index of list class
console.log(element);
//to print the text inside index 0 class list which is in with header tag code is bellow
element=document.getElementsByClassName("list")[0].innerText;
console.log(element);
//we can do this same as for innerHTML