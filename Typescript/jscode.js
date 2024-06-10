//var x ;

foo();
console.log(x); // undefined
var x = 10;
console.log(x); // 10

var y;
console.log(y); // undefined

//console.log(z);  //refernce error
function foo(){
    console.log("in foo");

    var x = 1;
}

// function sum(){
//     console.log("in sum no args");
// }

//implicit: this, arguments
function sum(x, y){
    console.log("in sum", x, y, arguments);
}


sum(2,3);
sum();
sum(2,3,4,5);


console.log("script over");