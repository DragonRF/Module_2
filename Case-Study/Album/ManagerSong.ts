import {Manager} from "./Manager";
import {Song} from "./Song";

export class ManagerSong implements Manager<Song>{
listSong: Song[] = [];

    add(t: Song) {
        if (t) {
            this.listSong.push(t);
            console.log(this.listSong)
        }else {
            return 'Please enter song name !'
        }
    }

    findById(id: number): any {
        for (let i = 0; i < this.listSong.length; i++) {
            if (this.listSong[i].id == id) {
                return i
            }
        }
        return 'Invalid Song  !'
    }

    findByName(name: string) {
        let listNameSong = this.listSong.filter((item =>
            item.name.toUpperCase().includes(name.toUpperCase())))
        if (!listNameSong.length){
            console.log(`\x1b[31m  This Song name not Found !  \x1b[0m`)
        }else {
            console.log(listNameSong)
        }
    }

    deleteById(id: number) {
        let index = this.findById(id);
        this.listSong.splice(index, 1)
    }

    edit(id: number, t: Song) {
        let index = this.findById(id);
        this.listSong[index] = t
    }

    findAll() {
        return this.listSong
    }
    showAllSong(){
        let strSong =``;
        for (let i = 0; i < this.listSong.length; i++) {
            strSong += this.listSong[i].showSong(i+1)
        }
        return strSong;
    }
}
