var obj={
    fname:'waqas',
    lname:' khan',
    gender:'male',
    age:33,
    email:'waqs@khan.com',
    fullname:function(){
        return this.fname+this.lname;//we have use here this, this means owner of the propertiy so here the property fname and lname owner is obj so we are using this.
        //we can also write obj instead of this
    },
    sum:function(){
        var a=33,b=54;
        var sum=a+b;
        return sum;
    }   
}
console.log(obj.fullname());
console.log(obj.sum());