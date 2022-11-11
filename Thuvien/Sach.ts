import {Tailieu} from "./Tailieu";
//import {Employee} from "../chua_bai/employee";

export class Sach extends Tailieu{
    private _tenTacgia: string;
    private _soTrang: number;


    constructor(maTailieu: number, nhaXuatban: string, soBanphathanh: number, tenTacgia: string, soTrang: number) {
        super(maTailieu, nhaXuatban, soBanphathanh);
        this._tenTacgia = tenTacgia;
        this._soTrang = soTrang;
    }


    get tenTacgia(): string {
        return this._tenTacgia;
    }

    set tenTacgia(value: string) {
        this._tenTacgia = value;
    }

    get soTrang(): number {
        return this._soTrang;
    }

    set soTrang(value: number) {
        this._soTrang = value;
    }
}

export class BookManager {
    static bookList: Tailieu[] = [];

    static addBook(Tailieu: Tailieu): void {
        BookManager.bookList.push(Tailieu);
    }

    static displayBook(): void {
        for (const bookList of BookManager.bookList) {
            console.table(bookList);
        }
    }

    static deleteBook(maTailieu: number): void {
        for (let i = 0; i < BookManager.bookList.length; i++) {
            if (BookManager.bookList[i].maTailieu === maTailieu) {
                BookManager.bookList.splice(i, 1);
            }
        }
    }

    static editBook(maTailieu: number, bookEdit: Sach): void {
        for (let i = 0; i < BookManager.bookList.length; i++) {
            if (BookManager.bookList[i].maTailieu === maTailieu) {
                BookManager.bookList[i] = bookEdit;
            }
        }
    }

    static findBook(maTailieu: number): void {
        for (let i = 0; i < BookManager.bookList.length; i++) {
            if (BookManager.bookList[i].maTailieu === maTailieu) {
                console.log(BookManager.bookList[i])
            }
        }
    }
}