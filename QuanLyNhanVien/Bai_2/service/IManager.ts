export interface IManager<T> {
    add(t: T): void;

    remove(code: number): void;

    find(code: number): void;

    findAll(): T[];
}