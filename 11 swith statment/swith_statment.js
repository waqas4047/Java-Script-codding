var day= 1;
switch (day) {// the day condition will be ckecked to each case when case is right then
     // the break will stop from further execution
    case 0:
        console.log("today is sunday");
            break;
    case 1:// the day condition matches with this so the this statment will be print;
        console.log("today is monday");
            break;
    case 2:
        console.log("today is tuesday");
            break;
    case 3:
        console.log("today is wednesday");
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