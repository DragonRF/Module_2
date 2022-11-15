import {Library} from './Library'

export class Magazine extends Library {
    public releaseAmount: number;
    public releaseMonth: number;

    constructor(code: number, publishingCompany: string, releaseNumber: number, releaseAmount: number, releaseMonth: number) {
        super(code, publishingCompany, releaseNumber);
        this.releaseAmount = releaseAmount;
        this.releaseMonth = releaseMonth;
    }

    public getReleaseMonth(): number {
        return this.releaseMonth;
    }
    public getReleaseAmount(): number {
        return this.releaseAmount;
    }
    public setReleaseMonth(releaseMonth: number): void {
        this.releaseMonth = releaseMonth;
    }
    public setReleaseAmount(releaseAmount: number): void {
        this.releaseAmount = releaseAmount;
    }
}