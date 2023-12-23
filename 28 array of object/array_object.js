var Student=[
    {Name:'waqas',age:25,gender:'male'},
    {Name:'qaiser',age:23,gender:'male'},
    {Name:'alia',age:16,gender:'female'},
    {Name:'adela',age:22,gender:'female'},
];
console.log(Student);
for(a=0;a<Student.length;a++){
    console.log(Student[a]);
}
console.log(Student);
for(a=0;a<Student.length;a++){
    console.log(Student[a].Name +" "+ Student[a].gender);
}