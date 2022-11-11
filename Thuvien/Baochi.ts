import {Tapchi} from "./Tapchi";
import {Tailieu} from "./Tailieu";
//import {Sach} from "./Sach";

export class Baochi extends Tapchi{
    private _ngayPhathanh: number;

    constructor(maTailieu: number, nhaXuatban: string, soBanphathanh: number, tenTacgia: string, soTrang: number, soPhathanh: number, thangPhathanh: number, ngayPhathanh: number) {
        super(maTailieu, nhaXuatban, soBanphathanh, tenTacgia, soTrang, soPhathanh, thangPhathanh);
        this._ngayPhathanh = ngayPhathanh;
    }

    get ngayPhathanh(): number {
        return this._ngayPhathanh;
    }
    set ngayPhathanh(value: number) {
        this._ngayPhathanh = value;
    }
}

export class NewsManager {
    static newsList: Tailieu[] = [];

    static addNews(Tailieu: Tailieu): void {
        NewsManager.newsList.push(Tailieu);
    }

    static displayNews(): void {
        for (const newsList of NewsManager.newsList) {
            console.table(newsList);
        }
    }

    static deleteNews(maTailieu: number): void {
        for (let i = 0; i < NewsManager.newsList.length; i++) {
            if (NewsManager.newsList[i].maTailieu === maTailieu) {
                NewsManager.newsList.splice(i, 1);
            }
        }
    }

    static editNews(maTailieu: number, newsEdit: Baochi): void {
        for (let i = 0; i < NewsManager.newsList.length; i++) {
            if (NewsManager.newsList[i].maTailieu === maTailieu) {
                NewsManager.newsList[i] = newsEdit;
            }
        }
    }

    static findNews(maTailieu: number): void {
        for (let i = 0; i < NewsManager.newsList.length; i++) {
            if (NewsManager.newsList[i].maTailieu === maTailieu) {
                console.log(NewsManager.newsList[i]);
            }
        }
    }
}