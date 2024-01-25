//this createelement will create a tag in below case it create tag praghraph
var newelement=document.createElement("p");
console.log(newelement);
var newelement=document.createElement("h1");//will create h1 tag;
console.log(newelement);
//now i want to write some text in the webpage so 
var text=document.createTextNode("hello how are you");//will print text in webpage
console.log(text);
//i want to comment some text so 
var comment=document.createComment("this is comment");//will comment text
console.log(comment);