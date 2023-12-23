var day= 3;
switch (day) {// the day condition will be ckecked to each case when case is right then
     // the break will stop from further execution
    case 0:
        console.log("today is sunday");
            break;
    case 1: case 2: case 3:// if the day is value is 1,2,3 the bellow statment will be print
        console.log("today is monday");
            break;
    case 4:
        console.log("today is thursday");
            break;
    case 5:
        console.log("today is friday");
            break;
    case 6:
        console.log("today is saturday");
            break;

    default:
        console.log("enter valid week day");
        break;
}