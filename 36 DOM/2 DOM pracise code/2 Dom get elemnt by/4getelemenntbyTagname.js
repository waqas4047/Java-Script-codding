var element;
element=document.getElementsByTagName("h1");//this will select h1 from entire page and will index every
//one by this we will get the index and then we can select our wish h1 tag from the page 
console.log(element);
//with the help of indexnow i want to target the index 1 h1 tag so i can write like below
element=document.getElementsByTagName("h1")[1];//if code not work run in console
console.log(element);