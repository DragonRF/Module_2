export class Tailieu{
    private _maTailieu: number;
    private _nhaXuatban: string;
    private _soBanphathanh: number;


    constructor(maTailieu: number, nhaXuatban: string, soBanphathanh: number) {
        this._maTailieu = maTailieu;
        this._nhaXuatban = nhaXuatban;
        this._soBanphathanh = soBanphathanh;
    }


    get maTailieu(): number {
        return this._maTailieu;
    }

    set maTailieu(value: number) {
        this._maTailieu = value;
    }

    get nhaXuatban(): string {
        return this._nhaXuatban;
    }

    set nhaXuatban(value: string) {
        this._nhaXuatban = value;
    }

    get soBanphathanh(): number {
        return this._soBanphathanh;
    }

    set soBanphathanh(value: number) {
        this._soBanphathanh = value;
    }
}