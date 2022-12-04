export class Song{
    private _id: number;
    private _name: string;
    private _singer: string;
    private _composer: string;

    constructor(id: number, name: string, singer: string, composer: string) {4
        this._id = id;
        this._name = name;
        this._singer = singer;
        this._composer = composer;
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

    get singer(): string {
        return this._singer;
    }

    set singer(value: string) {
        this._singer = value;
    }

    get composer(): string {
        return this._composer;
    }

    set composer(value: string) {
        this._composer = value;
    }

    showSong(i) {
        return `\x1b[32m  ${i}\n Id:  ${this.id}.\n Name: ${this.name} \n Singer: ${this.singer} ;\n Composer:  ${this.composer}  \x1b[0m \n`
    }

}