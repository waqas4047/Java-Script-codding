var list1=document.getElementById("list1").firstElementChild;
var list2=document.getElementById("list2").children[1];
var find=list1.isEqualNode(list2);//cryteria for is equal node is that both element should be same name 
//same tagname same attribute means every thing should be same;
console.log(find);
