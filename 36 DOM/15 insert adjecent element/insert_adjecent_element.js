var newelement=document.createElement("h2");
var newtext=document.createTextNode("i M going so be carefull");
newelement.appendChild(newtext);
var target=document.getElementById("text");
//below first parameter is position and second is element
target.insertAdjacentElement("beforebegin",newelement);//before begin means insert element before 
//with id text 
target.insertAdjacentElement("afterbegin",newelement);//after begin means insert element when
//div start 
target.insertAdjacentElement("beforeend",newelement);//before end  means insert element with in div end
target.insertAdjacentElement("afterend",newelement);//afrer end  means insert element when div end
