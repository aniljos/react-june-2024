import two_process from './two.js';
console.log("in main.ts");
function process() {
    console.log("main.ts process");
}
//two.ts
two_process();
//main
process();
