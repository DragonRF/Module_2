export class Sanpham{

    private _id!: number;
    private _productName!: string;
    private _price!: number;
    private _amount!: number;
    private _brand!: string;

    constructor(id: number, productName: string, price: number, amount: number, brand: string) {
        this._id = id;
        this._productName = productName;
        this._price = price;
        this._amount = amount;
        this._brand = brand;
    }

    get productName(): string {
        return this._productName;
    }

    set productName(value: string) {
        this._productName = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}