var arr=new Array(4);

for(var a=0;a<5;a++){
    arr[a]=prompt("enter "+a +" index value");
}
document.write("<ul>");
for(var g=0;g<5;g++){
    document.write("<li>"+arr[g]+"</li>");
}
document.write("<ul>");