console.log("Hello Typescript 123");
var x = 10; // x is number==> Type inference
console.log("x", x);
//x = "abc"; // static type checking
var y; // y is any 
y = 10;
console.log("y", y);
y = "abc";
console.log("y", y);
var z; // z is string==> Type annotation
console.log("z", z);
var user;
user = {
    id: 1,
    name: "Ram"
};
console.log("user", user);
var findIfPresent;
findIfPresent = function (array, searchKey) {
    return array.indexOf(searchKey) >= 0;
};
var emp = {
    id: 1,
    name: "Ram",
    salary: 10000
};
//var => global, function
//let => block
//const => block
