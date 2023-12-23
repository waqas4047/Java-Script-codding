var arr=[
    ["waqas",2,"male","SE"],
    ["haroon",3,"male","CS"],
    ["Ubaid",5,"male","CHE"],
    ["Wasif",6,"male","PHY"]
]
console.log(arr.length);//this is function which finds the totol length of arr
for(a=0;a<arr.length;a++){
    for(b=0;b<arr[a].length;b++){
        document.write(arr[a][b]+" ");
    }
    document.write("<br>");

}