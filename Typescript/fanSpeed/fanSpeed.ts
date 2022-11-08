enum Speed {
    SLOW = 1,
    MEDIUM = 2,
    FAST = 3
}

class Fan {
    private _speed: Speed = Speed.SLOW
    private _on: boolean = false
    private _radius: number = 5
    private _color: string = 'blue'


    constructor(speed: Speed, on: boolean, radius: number, color: string) {
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }

    getSpeed(): Speed {
        return this._speed;
    }

    setSpeed(value: Speed) {
        this._speed = value;
    }

    getOn(): boolean {
        return this._on;
    }

    setOn(value: boolean) {
        this._on = value;
    }

    getRadius(): number {
        return this._radius;
    }

    setRadius(value: number) {
        this._radius = value;
    }

    getColor(): string {
        return this._color;
    }

    setColor(value: string) {
        this._color = value;
    }

    toString(){
        //console.log('123')
         return `Trang thai quat : ${this._on} , Toc do quat : ${this._speed}, Mau quat : ${this._color} , Ban kinh quat : ${this._radius}`
    }
}

let fan = new Fan(Speed.SLOW, true,10,'red')
console.log(fan.toString())
//fan.toString()