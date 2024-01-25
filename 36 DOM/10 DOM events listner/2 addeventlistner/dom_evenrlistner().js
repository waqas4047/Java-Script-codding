document.getElementsByTagName("header")[0].addEventListener("mouseenter",abc);
function abc(){
    document.getElementsByTagName("header")[0].style.background="green";
}
//we can add multiple event to a one tage see below
//so in this code we apply two events in one tage you can see one on mouse hover and one on mouse click
//we can also call many fucntion with one event
document.getElementsByTagName("header")[0].addEventListener("click", function(){
    document.getElementsByTagName("header")[0].style.border="5px solid brown";
});
