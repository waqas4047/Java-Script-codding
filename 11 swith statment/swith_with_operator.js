var age=50;
switch (true) {
    case (age>=18 && age<=45):
        console.log("you can drive a car");
        break;
    case (age<18 && age>=10):
        console.log("you can drive a toy car");
        break;
    case (age>3 && age<6):
        console.log("plx drink milk");
        break;

    default:
        console.log("enter the correct age");
        break;
}