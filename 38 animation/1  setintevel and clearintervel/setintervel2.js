var a = 0;
var id=setInterval(anima,100);
function anima(){
       a=a+10
    if(a==500){
        clearInterval(id)//by clear intevel we can stop the setintervel calling funciton
        //when a==500 then i will stop div 
    }
    else{
   var target=document.getElementById("test");
   target.style.marginLeft = a + 'px';//by this the div will move in every 100milisecondfrom left to right
   //can also place width inplace of marginleft
   }
}