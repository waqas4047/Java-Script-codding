//parntnode and parentelement do same work but small diffrence is that 
//if elemnt has no parent elemnet then parant element will return Null
//and parentNode will return necessery some thing
var a=document.getElementById("inner").parentNode;
console.log(a);
//by below method we change background color
document.getElementById("inner").parentNode.style.background="red";
//now we changing the background color of child c lets see
document.getElementById("child-c").parentNode.style.background="lightgreen";