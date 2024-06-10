class Car {
    //constructor implemention(one)
    constructor(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    applyBrakes(val) {
        this.speed -= val;
    }
    get keycode() {
        return this._keycode;
    }
    set keycode(value) {
        this._keycode = value;
    }
}
let car1 = new Car();
console.log("car1", car1);
car1.name = "Audi";
car1.speed = 200;
car1.gears = 6;
car1.keycode = "123";
console.log("car1", car1);
car1.applyBrakes(100);
console.log("car1", car1);
let car2 = new Car("BMW", 170, 6);
console.log("car2", car2);
//let car3 = new Car("BMW"); // compiler error
