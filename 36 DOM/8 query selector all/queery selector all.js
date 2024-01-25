var cl;
cl=document.querySelectorAll(".list");
//if i want to pick all class with same name then i will use queryselectorall;
console.log(cl);
//now if i want to get list of nav tag then now i know its index so i can easily get it
cl=document.querySelectorAll(".list")[1].innerHTML;
console.log(cl);
//now if i want to see that how many time a tag has used in top id then i can write
cl=document.querySelectorAll("#top h2");
console.log(cl);
//now i want to print the text of h2 in of 2nd number then i can write
cl=document.querySelectorAll("#top h2")[1].innerHTML;
console.log(cl);