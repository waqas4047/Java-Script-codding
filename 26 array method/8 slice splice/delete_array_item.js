var arr=["33",5,76,98];
delete arr[1];//by this method we can delete the item but its index will be empty.not other items can take its place.
console.log(arr[1]);
//now we want to delete item but we want that its index take other items.
var a=[22,4,55,64,3];
a.splice(1,1);//here we have delete the index 1 value and the next 1 is for that how many value u want to delte .so we have deleted only one value at index 1;
console.log(a);
console.log(a[1]);
