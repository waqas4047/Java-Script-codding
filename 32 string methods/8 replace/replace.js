var str="hi my name is waqas and hi how are you";
var a=str.replace("hi","hello");// it replce the word first hi is in the string and we replace that by hello and the seccond hi it will not change if we want to change both than see bellow
console.log(a);
var c=str.replace(/hi/g,"handsom");//now both hi will chnge to handsome
console.log(c);