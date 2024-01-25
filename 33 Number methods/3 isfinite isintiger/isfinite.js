var a=33;
var g=NumberisFinite(a);//it will return true bc 33 is finfite
var c="33";
var h=Number.isFinite(c);//it will return true bc 33 is finfite
console.log(h);
var c="hello";
var h=Number.isFinite(c);//it will return false because hello is infinite
console.log(h);
var c=Infinity;//it will return false because hello is infinite
console.log(h);