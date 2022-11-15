export class Library {
    public id: number;
    public publishingCompany: string;
    public releaseNumber: number;

    constructor(id: number, publishingCompany: string, releaseNumber: number) {
        this.id = id;
        this.publishingCompany = publishingCompany;
        this.releaseNumber = releaseNumber;
    }
    public getId(): number {
        return this.id;
    }
    public getPublishingCompany(): string {
        return this.publishingCompany;
    }
    public getReleaseNumber(): number {
        return this.releaseNumber;
    }
    public setId(id: number): void {
        this.id = id;
    }
    public setPublishingCompany(publishingCompany: string): void {
        this.publishingCompany = publishingCompany;
    }
    public setReleaseNumber(releaseNumber: number): void {
        this.releaseNumber = releaseNumber;
    }
}