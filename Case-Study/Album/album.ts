import {Song} from "./song";

export class Album{
    private _albumname: string;
    private _price: number;
    private _description: string;
    listSong: Song[] = []

    constructor(albumname: string, price: number, description: string) {
        this._albumname = albumname;
        this._price = price;
        this._description = description;
    }

    get albumname(): string {
        return this._albumname;
    }

    set albumname(value: string) {
        this._albumname = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    add(song: Song){
        this.listSong.push(song)
    }

    displayAll(): Song[]{
        return this.listSong
    }

    findByName(name: string){
        for (let i = 0; i < this.listSong.length; i++){
            if (this.listSong[i].name === name){
                return i;
            }
        }
        return -1;
    }

    remove(name: string){
        let index = this.findByName(name)
        if (index === -1){
            console.log('Cannot found.')
        }else {
            this.listSong.splice(index,1)
        }

    }

    edit(name: string,newSong: Song){
        let index = this.findByName(name)
        if (index == -1){
            return 'Cannot found'
        }else {
            this.listSong[index] = newSong;
        }
    }
}