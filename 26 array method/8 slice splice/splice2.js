var a=["hello","waqas","imran","adil","shaaam"];
console.log(a);
a.splice(2,1,"aman","kaju");// the first 2 is index now if i want to delete that index value then the send 1 is for delete that index value if i want to delete two value then that index value in thsi case which is 2 and the next index value which will be 3 will be deleted and thir places will be filled by aman and kaju
console.log(a);// when u run the program u can se that imran is deleted


var b=["hello","waqas","imran","adil","shaaam"];
console.log(b);
b.splice(2,2,"aman","kaju");// here 2 valuse will be delete
console.log(b);
console.log(b[2]);