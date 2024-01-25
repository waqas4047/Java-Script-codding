var id=setTimeout(anim,3000);//it will run only one time in this anim will call after 3 second for 
// only one time
function anim(){
    var target=document.getElementById("test");
    target.style.width="500px";
}
function stopanimation(){
    clearTimeout(id);//by this we can stop div from increasing width when we prss button before 3 second
}