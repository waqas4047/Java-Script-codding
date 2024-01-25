document.getElementsByTagName("header")[0].addEventListener("mouseenter",abc);
function abc(){
    document.getElementsByTagName("header")[0].style.background="green";
}

document.getElementsByTagName("header")[0].addEventListener("click", function(){
    document.getElementsByTagName("header")[0].style.border="5px solid brown";
});// now i want to remove the abc function  from this website
//so now we can see the mouse enter funciton is not working
document.getElementsByTagName("header")[0].removeEventListener("mouseenter",abc);
