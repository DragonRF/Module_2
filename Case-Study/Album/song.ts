export class Song{
    private _name: string;
    private _length: string;
    private _artist: string;

    constructor(name: string, length: string, artist: string) {
        this._name = name;
        this._length = length;
        this._artist = artist;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get length(): string {
        return this._length;
    }

    set length(value: string) {
        this._length = value;
    }

    get artist(): string {
        return this._artist;
    }

    set artist(value: string) {
        this._artist = value;
    }
}