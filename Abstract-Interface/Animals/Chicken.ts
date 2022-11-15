import {Animal} from "../Animal/Animal";

export class Chicken extends Animal{
    makeSound(): string {
        return "Chicken: Cluck-cluck!"
    }
}