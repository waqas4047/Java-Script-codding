var arr=[
    ["waqas",2,"male","SE"],
    ["haroon",3,"male","CS"],
    ["Ubaid",5,"male","CHE"],
    ["Wasif",6,"male","PHY"]
]
console.log(arr[3][1]);
console.log("*************");
for(a=0;a<4;a++){
    console.log(arr[a]);
}
console.log("***************");
for(a=0;a<4;a++){
    for(b=0;b<4;b++){
        document.write(arr[a][b]+" ");
    }
    document.write("<br>");
}