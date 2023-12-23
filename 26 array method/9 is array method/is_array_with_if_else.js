var a=[22,3,'d',"how"];
console.log(a);
if(Array.isArray(a)==true){
     a.splice(2,0,"yes");
    console.log(a);
}
else{
    console.log("this is not array");
}