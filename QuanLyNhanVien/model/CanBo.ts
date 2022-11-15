export class CanBo {
    private _name!: string;
    private _age!: number;
    private _gender!: boolean;
    private _address!: string;

    constructor(name: string, age: number, gender: boolean, address: string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._address = address;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get gender(): boolean {
        return this._gender;
    }

    set gender(value: boolean) {
        this._gender = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
}