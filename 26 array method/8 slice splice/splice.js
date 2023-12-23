var a=["hello","waqas","imran","adil","shaaam"];
console.log(a);
a.splice(2,0,"aman","kaju");//the firs 2 is index bore which we will add aman and kaju and the 0 is for the we not want to delete the existing value of index 2 so we put 0 which will move ford the index 2 value to next indexes.
console.log(a);
a.splice(-1,0,"aman","kaju");// i want to add new items at 2nd last position;
console.log(a);