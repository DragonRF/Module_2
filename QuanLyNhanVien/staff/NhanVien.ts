import {CanBo} from "../model/CanBo";

export class NhanVien extends CanBo{
    private _job!: string;

    constructor(name: string, age: number, gender: boolean, address: string, job: string) {
        super(name, age, gender, address);
        this._job = job;
    }
    
    get job(): string {
        return this._job;
    }

    set job(value: string) {
        this._job = value;
    }
}