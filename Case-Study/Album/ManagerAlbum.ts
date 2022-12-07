import {Manager} from "./Manager";
import {Album} from "./Album";


export class ManagerAlbum implements Manager<Album> {
    listAlbum: Album[] = [];

    add(t: Album) {
        if (t) {
            this.listAlbum.push(t);
        } else {
            return 'Please enter TimNguoiIu name!'
        }
    }

    findById(id: number):any {
        for (let i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].id == id){
                return i
            }
        }
        return `\x1b[31m  Ivalid Album  \x1b[0m`
    }

    findByName(name: string) {
        let listNameAlbum = this.listAlbum.filter((item =>
            item.name.toUpperCase().includes(name.toUpperCase())))
        if (listNameAlbum.length == 0){
            console.log(`\x1b[31m  This Album name not Found !  \x1b[0m`)
        }else {
            // console.table(listNameAlbum)
            // console.log()
            // name
            // listNameAlbum.listSong.for``
            listNameAlbum.forEach(item => {
                console.log('id:', item.id)
                console.log('name:', item.name)

                console.log("-----------------")
            })
        }
    }

    deleteById(id: number) {
        let index = this.findById(id);
        this.listAlbum.splice(index,1)
    }

    edit(id: number, t: Album) {
        let index = this.findById(id);
        this.listAlbum[index] = t
    }

    findAll() :Album[]{
        return this.listAlbum;
    }}
