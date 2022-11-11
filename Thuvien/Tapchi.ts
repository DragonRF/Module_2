import {Sach} from "./Sach";
import {Tailieu} from "./Tailieu";

export class Tapchi extends Sach{
    private _soPhathanh: number;
    private _thangPhathanh: number;


    constructor(maTailieu: number, nhaXuatban: string, soBanphathanh: number, tenTacgia: string, soTrang: number, soPhathanh: number, thangPhathanh: number) {
        super(maTailieu, nhaXuatban, soBanphathanh, tenTacgia, soTrang);
        this._soPhathanh = soPhathanh;
        this._thangPhathanh = thangPhathanh;
    }


    get soPhathanh(): number {
        return this._soPhathanh;
    }

    set soPhathanh(value: number) {
        this._soPhathanh = value;
    }

    get thangPhathanh(): number {
        return this._thangPhathanh;
    }

    set thangPhathanh(value: number) {
        this._thangPhathanh = value;
    }
}

export class MagManager {
    static magList: Tailieu[] = [];

    static addMag(Tailieu: Tailieu): void {
        MagManager.magList.push(Tailieu);
    }

    static displayMag(): void {
        for (const magList of MagManager.magList) {
            console.table(magList);
        }
    }

    static deleteMag(maTailieu: number): void {
        for (let i = 0; i < MagManager.magList.length; i++) {
            if (MagManager.magList[i].maTailieu === maTailieu) {
                MagManager.magList.splice(i, 1);
            }
        }
    }

    static editMag(maTailieu: number, magEdit: Tapchi): void {
        for (let i = 0; i < MagManager.magList.length; i++) {
            if (MagManager.magList[i].maTailieu === maTailieu) {
                MagManager.magList[i] = magEdit;
            }
        }
    }

    static findMag(maTailieu: number): void {
        for (let i = 0; i < MagManager.magList.length; i++) {
            if (MagManager.magList[i].maTailieu === maTailieu) {
                console.log(MagManager.magList[i]);
            }
        }
    }
}