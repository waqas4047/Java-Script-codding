var element;
//get attributenode will print both the property name as well as the value of the property
element=document.getElementById("top").getAttributeNode("onclick");
console.log(element);
//by bellow we can only print the value by this method also and by getattribute method also
element=document.getElementById("top").getAttributeNode("onclick").value;
console.log(element);
element=document.getElementById("top").getAttributeNode("onclick").name;
console.log(element);