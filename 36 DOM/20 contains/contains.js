var parentelement=document.getElementById("test");
var target=document.getElementById("abc");//this will give false bc there is no child or greatgrand child
//test element have abc id;
var foud=parentelement.contains(target);
console.log(foud);
var newel=document.getElementById("xyz");//this will give true bc there is  child or greatgrand child
//in the name of xyz in test id
var foud=parentelement.contains(newel);
console.log(foud);