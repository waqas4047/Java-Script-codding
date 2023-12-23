var per=prompt("enter your percentage");
if (per>=80 && per<=100){
    document.write("A1 grade");
}
else if (per>=60 && per<80){
    document.write("B grade");
}
else if (per>=40 && per<60){
    document.write("C grade");
}
else if (per>=33 && per<40){
    document.write("D grade");
}
else if (per<33){
    document.write("you are fail");
}
else{
    document.write("please enter valid percentage");
}

