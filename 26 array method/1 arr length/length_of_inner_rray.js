var arr = [
    ["waqas", 2, "male", "SE"],
    ["haroon", 3, "male", "CS"],
    ["Ubaid", 5, "male"],
    ["Wasif", 6, "male", "PHY"]
];

console.log("Total rows (outer array length): " + arr.length);

for (var a = 0; a < arr.length; a++) {
    console.log("Inner array length at index " + a + ": " + arr[a].length);
}
