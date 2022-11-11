export class Shape {
    private _color: string = 'green';
    private _filled: boolean = true;


    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }


    public getColor(): string {
        return this._color;
    }

    public setColor(color: string): void {
        this._color = color;
    }

    public isFilled(): boolean {
        return this._filled;
    }

    public setFilled(filled: boolean): void {
        this._filled = filled;
    }

    public toString(): string{
        return 'A Shape with color of '

        + this.getColor()
        + ' and'
        + (this.isFilled() ? ' filled' : ' not filled')
    }
}