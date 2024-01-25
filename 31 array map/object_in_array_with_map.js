var Student=[
    {Name:'waqas',age:25,gender:'male'},
    {Name:'qaiser',age:23,gender:'male'},
    {Name:'alia',age:16,gender:'female'},
    {Name:'adela',age:22,gender:'female'},
];
var c=Student.map(test);
console.log(c);
function test(x){
    return x.Name +" "+  x.gender; 
}