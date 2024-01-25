var element;
element=document.getElementById("top").attributes;
// by the above mehtod .attributes it will give us all the properties in array
console.log(element);
element=document.getElementById("top").attributes[2].value; //now by this we can print the value as well as
//the name of the attribute;
console.log(element);