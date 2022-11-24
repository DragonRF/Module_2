import {Sanpham} from "./sanpham";
import {IManager} from "./IManager";

export class ProductManager implements IManager<Sanpham> {

    listProduct: Sanpham[] = []

    add(t: Sanpham): void {
        this.listProduct.push(t)
    }

    edit(id: number, t: Sanpham): void {
        let index = this.findById(id);
        if (index === -1) {
            console.log('Không có')
        } else {
            this.listProduct[index] = t;
        }
    }

    findAll(): Sanpham[] {
        return this.listProduct;
    }

    findById(id: number): number {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (id === this.listProduct[i].id) {
                return id;
            }
        }
        return -1;
    }

    remove(id: number): void {
        let index = this.findById(id);
        if (index === -1) {
            console.log('Khong tim thay')
        } else {
            this.listProduct.splice(index,1)
        }
    }
}
let input = require('readline-sync')
let productManager = new ProductManager;
main()
function main(){
    let choice = -1;
    do {
        console.log(`
        1. Quan ly san pham
        0. Thoat`)
        choice = +input.question('Enter choice : ')
        switch (choice){
            case 1:
                showMenuProduct();
                break;
            case 0:
                break;
        }
    }while (choice!== 0);
}

function showMenuProduct(){
    let choice = -1;
    do {
        console.log(`
        ----Quan Ly San Pham----
        1. Them san pham
        2. Sua san pham
        3. Hien thi san pham
        4. Tim san pham
        5. Xoa san pham
        0. Thoat
        `)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:
                break;
            case 3:
                findAllProduct()
                break;
            case 4:
                break;
            case 5:
                deleteProduct()
                break;
        }
    }while (choice !== 0)
}

function addProduct(){
    console.log('------Them san pham------')
    let id = +input.question('Enter ID: ')
    let productName = input.question('Enter Product Name: ')
    let price = +input.question('Enter Price: ')
    let amount = +input.question('Enter Amount: ')
    let brand = input.question('Enter product`s brand: ')
    let product = new Sanpham(id,productName,price,amount,brand)
    productManager.add(product)
}

function findAllProduct() {
    console.log('------Cac san pham dang bay ban:------')
    console.log(productManager.findAll())
}

function deleteProduct(){
    let index = +input.question('Enter ID:')
    productManager.remove(index)
}