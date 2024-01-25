var newelement=document.createElement("h1");//will create h1 tag;
//now i want to write some new in the webpage so 
var newtext=document.createTextNode("hello how are you");//will print new in webpage
//now i want to append new into h1 tag
newelement.appendChild(newtext);
var newcoment=document.createComment("nice to meet you");//will create comment;
document.getElementById("text").appendChild(newelement);//this will apend the h1 into last of div text
//now i want to enter this h1 before every thing so for that 
var targt=document.getElementById("text");
targt.insertBefore(newelement,targt.childNodes[0]);//first parameter is for text which we want to append
//and second is position