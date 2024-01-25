// document.querySelector("#outter").addEventListener("click",function(){
//     alert("outter div");
// });
// //in this case if we click on outer div it will print the alert sms
// //but if we click on inner div first it will print the alert sms for inner dive first and will also 
// //print the outer div alert sms
// document.querySelector("#inner").addEventListener("click",function(){
//     alert("inner div");
// });
//NOw if we want to print the outer div alert first and the inner div alert second then
document.querySelector("#outter").addEventListener("click",function(){
    alert("outter div");
},true);//budefalut the true value is false
    document.querySelector("#inner").addEventListener("click",function(){
        alert("inner div");
    },true);