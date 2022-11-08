var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 1] = "SLOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed || (Speed = {}));
var Fan = /** @class */ (function () {
    function Fan(speed, on, radius, color) {
        this._speed = Speed.SLOW;
        this._on = false;
        this._radius = 5;
        this._color = 'blue';
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }
    Fan.prototype.getSpeed = function () {
        return this._speed;
    };
    Fan.prototype.setSpeed = function (value) {
        this._speed = value;
    };
    Fan.prototype.getOn = function () {
        return this._on;
    };
    Fan.prototype.setOn = function (value) {
        this._on = value;
    };
    Fan.prototype.getRadius = function () {
        return this._radius;
    };
    Fan.prototype.setRadius = function (value) {
        this._radius = value;
    };
    Fan.prototype.getColor = function () {
        return this._color;
    };
    Fan.prototype.setColor = function (value) {
        this._color = value;
    };
    Fan.prototype.toString = function () {
        //console.log('123')
        return "Trang thai quat : ".concat(this._on, " , Toc do quat : ").concat(this._speed, ", Mau quat : ").concat(this._color, " , Ban kinh quat : ").concat(this._radius);
    };
    return Fan;
}());
var fan = new Fan(Speed.SLOW, true, 10, 'red');
console.log(fan.toString());
//fan.toString()
