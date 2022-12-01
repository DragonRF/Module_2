import {Album} from "./album";

export class AlbumManager{
    listAlbum: Album[] = [];

    add(album: Album){
        this.listAlbum.push(album)
    }

    displayAll(): Album[]{
        return this.listAlbum
    }

    findByAlbumName(albumname: string){
        for (let i = 0; i < this.listAlbum.length; i++){
            if (this.listAlbum[i].albumname === albumname){
                return i;
            }
        }
        return -1;
    }

    remove(albumname: string){
        let index = this.findByAlbumName(albumname)
        if (index === -1){
            console.log('Cannot found.')
        }else {
            this.listAlbum.splice(index,1)
        }

    }

    edit(albumname: string,newAlbum: Album){
        let index = this.findByAlbumName(albumname)
        if (index == -1){
            return 'Cannot found'
        }else {
            this.listAlbum[index] = newAlbum;
        }
    }
}
