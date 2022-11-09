export class ProductManager {
    private products = [];

    constructor() {
    }

    get getAll() {
        return this.products;
    }

    set add(product) {
        this.products.push(product);
    }

}