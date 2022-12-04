import {ManagerSong} from "./ManagerSong";
import {Song} from "./Song";
import {Account} from "./Account";

export class Album extends ManagerSong {
    private _id: number;
    private _name: string;
    listSong: Song[] = [];
    private _createdUser: Account;

    constructor(id: number, name: string, createdUser: Account) {
        super();
        this._id = id;
        this._name = name;
        this._createdUser = createdUser;
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



    get createdUser(): Account {
        return this._createdUser;
    }

    set createdUser(value: Account) {
        this._createdUser = value;
    }

    findAllSong() {
        let strAlbum = ``
        for (let i = 0; i < this.listSong.length; i++) {
            strAlbum += this.listSong[i].showSong(i+1)
        }
        return strAlbum;
    }
}