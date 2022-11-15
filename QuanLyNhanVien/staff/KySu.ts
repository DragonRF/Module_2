import {CanBo} from "../model/CanBo";
export class KySu extends CanBo{
    private _majors!: string;

    constructor(name: string, age: number, gender: boolean, address: string, majors: string) {
        super(name, age, gender, address);
        this._majors = majors;
    }

    get majors(): string {
        return this._majors;
    }

    set majors(value: string) {
        this._majors = value;
    }
}