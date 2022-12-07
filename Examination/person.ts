export class Person{
    private _id!: number;
    private _name: string;
    private _zodiac!: string;
    private _home!: string;
    private _yearofbirth!: number;
    private _hobbies!: string;

    constructor(id: number, name: string, zodiac: string, home: string, yearofbirth: number, hobbies: string) {
        this._id = id;
        this._name = name;
        this._zodiac = zodiac;
        this._home = home;
        this._yearofbirth = yearofbirth;
        this._hobbies = hobbies;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get zodiac(): string {
        return this._zodiac;
    }

    set zodiac(value: string) {
        this._zodiac = value;
    }

    get home(): string {
        return this._home;
    }

    set home(value: string) {
        this._home = value;
    }

    get yearofbirth(): number {
        return this._yearofbirth;
    }

    set yearofbirth(value: number) {
        this._yearofbirth = value;
    }

    get hobbies(): string {
        return this._hobbies;
    }

    set hobbies(value: string) {
        this._hobbies = value;
    }
}