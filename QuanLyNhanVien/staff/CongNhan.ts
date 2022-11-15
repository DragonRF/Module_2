import {CanBo} from "../model/CanBo";
export class CongNhan extends CanBo{
    private _rank!: number;

    constructor(name: string, age: number, gender: string, address: string, rank: number) {
        super(name, age, gender, address);
        this._rank = rank;
    }

    get rank(): number {
        return this._rank;
    }

    set rank(value: number) {
        this._rank = value;
    }
}