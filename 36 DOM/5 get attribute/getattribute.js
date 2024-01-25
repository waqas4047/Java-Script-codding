var element;
//if iwant to see the attribute in the tag or id or a class we can use the following properties;
element=document.getElementById("top").getAttribute("id");//this will print the id value in the top id
console.log(element);
//if i want to find the value of class in the top id then we can write
element=document.getElementById("top").getAttribute("class");
console.log(element);   
element=document.getElementById("top").getAttribute("style");
console.log(element)
var a;
//with tag name we will give index number of with tag bc there will be many tag with same name 
a=document.getElementsByTagName("main");//by this we will find the tag index
console.log(a);
a=document.getElementsByTagName("main")[0].getAttribute("onclick");//by this we can print the attrubute
//value with the help of tag
console.log(a);