console.log("Hello Typescript 123");

var x = 10; // x is number==> Type inference
console.log("x", x);
//x = "abc"; // static type checking

var y; // y is any 
y = 10;
console.log("y", y);
y = "abc";
console.log("y", y);

var z: string; // z is string==> Type annotation
console.log("z", z);

var user: {id: number, name: string, city?: string};

user = {    
    id: 1,
    name: "Ram"
};


console.log("user", user);

var findIfPresent: (array: number[], searchKey: number) => boolean;

findIfPresent = function(array, searchKey):boolean{

    return array.indexOf(searchKey) >= 0;
}

type windowState = "open" | "closed" | "minimized";
type stringOrNumber = string | number;
type Employee = {
    id: number,
    name: string,
    salary: number
}

var emp: Employee = {
    id: 1,
    name: "Ram",
    salary: 10000
}

//var => global, function
//let => block
//const => block








