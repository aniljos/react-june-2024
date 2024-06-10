import { add, multiply } from './one.js';
//import * as onelib from './one.js'
console.log("in two.ts");
function process() {
    add(2, 3);
    multiply(2, 3);
    console.log("in two.ts process");
}
function foo() { }
export default process;
//export default {process, foo};
