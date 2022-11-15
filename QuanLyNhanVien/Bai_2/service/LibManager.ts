import {Library} from '../model/Library'
import {Book} from '../model/Book'
import {Magazine} from '../model/Magazine'
import {Newspaper} from '../model/Newspaper'
import {IManager} from './IManager'

export class LibraryManager implements IManager<Library> {
    public listDocuments: Library[] = [];
    public list: Library[] = [];
    

    constructor() {
    }

    add(t: Library): void {
        this.listDocuments.push(t);
    }

    remove(id: number): void {
        let index = this.findById(+id);
        if (index === -1) {
            console.log('Khong tim thay');           
        }
        else {
            this.listDocuments.splice(index, 1);
            console.log('Xoa thanh cong');
            
        }
        
    }

    findAll(): any {
        if (this.listDocuments.length === 0) return `Khong co tai lieu`
        return this.listDocuments;
    }
    

    findByType(Type: any) {
        this.list = [];
        for (let i = 0; i < this.listDocuments.length; i++) {
            if (this.listDocuments[i] instanceof Type) {
                this.list.push(this.listDocuments[i])
            }
        }
        if (this.list.length === 0) return `Khong co tai lieu`
        return this.list
    }

    find(id: number): void {
        let index = this.findById(+id);
        if (index === -1) {
            console.log('Khong tim thay');           
        }
        else {
            console.log('Da tim thay');
            console.log(this.listDocuments[index]);
            
        }
    }

    findById(id: number): number {
        for (let i = 0; i < this.listDocuments.length; i++) {
            if (this.listDocuments[i].id === id) {
                return i;
            }
        }
        return -1;
    }
}