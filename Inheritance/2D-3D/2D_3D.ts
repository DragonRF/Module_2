export class Point2D {
    _x: number;
    _y: number;


    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public getX(): number {
        return this._x;
    }

    public getY(): number {
        return this._y;
    }

    public setX(x: number): void {
        this._x = x;
    }

    public setY(y: number): void {
        this._y = y;
    }

    public getXY(): object {
        return {x : this._x , y : this._y }
    }

    public setXY(x: number, y: number): void {
        this._x = x;
        this._y = y;
    }
}

let obj = new Point2D(12,11);
console.log(obj)
obj.setXY(1,2)
console.log(obj.getXY())

class Point3D extends Point2D {
    private _z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    public getZ(): number {
        return this._z;
    }

    public setZ(value: number) {
        this._z = value;
    }
    public getXYZ(): object {
        return this;
    }

    public setXYZ(x: number, y: number, z: number): void {
        this._x = x;
        this._y = y;
        this._z = z;
    }
}

let arr = new Point3D(10,10,10)
console.log(arr)
arr.setXYZ(1,1,1)
console.log(arr.getXYZ())