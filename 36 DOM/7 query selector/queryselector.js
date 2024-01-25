var a;
a=document.querySelector("#top").innerText;//by this method we can also print the text inside id top this
//in this method we dont need to write getelementbyid or class or tagname etc
console.log(a);
document.querySelector("#top").innerHTML="<h2>hi i am good</h2>";//it will over ride all text inside the top id
var cl;
cl=document.querySelector("#top").getAttribute("class");//so its woding
console.log(cl);
cl=document.querySelector("#top").attributes;//so its woding
console.log(cl);
cl=document.querySelector(".list");//if there are mover than one class with same name then query selector will pick the first
//one if i want to pick all class with same name then i will use queryselectorall;
console.log(cl);
