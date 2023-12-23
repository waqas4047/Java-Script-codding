var a="waqas khan"; // here a is global variable we can use value of global variable inside the fucntion 
function Name() {
     var b="shan jan";
    //  this is local variable we can not use its value out side this function it will give us error;
    console.log("hello mr "+ a);
}
Name();