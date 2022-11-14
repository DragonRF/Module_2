export class Programer {
    private _id!: number;
    private _sallary!: number;

    constructor(id: number, sallary: number) {
        this._id = id;
        this._sallary = sallary;
    }

    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getSallary(): number {
        return this._sallary;
    }

    setSallary(value: number) {
        this._sallary = value;
    }
}
let listProgramer:Programer[] = [];

let jsProgramer = new Programer(1,15)
let javaProgramer = new Programer(2,20)
let phpProgramer = new Programer(3,12)

listProgramer.push(phpProgramer)
listProgramer.push(jsProgramer)
listProgramer.push(javaProgramer)

let max = listProgramer[0].getSallary();
for (let i = 0; i < listProgramer.length; i++) {
    if (listProgramer[i].getSallary() > max){
        max = listProgramer[i].getSallary()
    }
}

listProgramer.sort()
listProgramer.reverse()
console.log(listProgramer)
console.log(max)