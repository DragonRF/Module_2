import {Circle} from "./Circle";

export class Cylinder extends Circle {
    private _height: number = 1;


    constructor(radius: number, color: string, filled: boolean, height: number) {
        super(radius, color, filled);
        this._height = height;
    }


    public getHeight(): number {
        return this._height;
    }

    public setHeight(value: number) {
        this._height = value;
    }

    public getVolume(): number{
        return this.getRadius()**2 * this.getHeight() * 3.14
    }

    public toString(): string {
        return 'A Cylinder with radius = '
            + this.getRadius()
            + ' and with height = '
            + this.getHeight()
            + ' also with volume = '
            + this.getVolume()
            + ', which is a subclass of '
            + super.toString();
    }
}

let cylinder = new Cylinder(3.5,'blue',true,5)
console.log(cylinder);
console.log(cylinder.toString());
console.log(cylinder.getVolume());