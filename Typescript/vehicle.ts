interface Vehicle{

    name: string;
    speed: number;
    gears?: number;

    applyBrakes(val: number): void;

}

class Car implements Vehicle{

    name: string;
    speed: number;
    gears?: number;
    private _keycode: string;

    //constructor definitions(multiple)
    constructor();
    constructor(name: string, speed: number);
    constructor(name: string, speed: number, gears: number);

      //constructor implemention(one)
    constructor(name?: string, speed?: number, gears?: number){

        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }

    applyBrakes(val: number): void {
        
        this.speed -= val;
    }

    public get keycode(){
        return this._keycode;
    }
    public set keycode(value: string){
        this._keycode = value;
    }
}
let car1 = new Car();
console.log("car1", car1);
car1.name = "Audi"; car1.speed=200; car1.gears=6;
car1.keycode = "123";
console.log("car1", car1);
car1.applyBrakes(100);
console.log("car1", car1);

let car2 = new Car("BMW", 170, 6);
console.log("car2", car2);

//let car3 = new Car("BMW"); // compiler error
