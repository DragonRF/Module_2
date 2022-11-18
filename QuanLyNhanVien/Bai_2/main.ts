import {Library} from './model/Library'
import {Book} from './model/Book'
import {Magazine} from './model/Magazine'
import {Newspaper} from './model/Newspaper'
import {LibraryManager} from './service/LibManager'

let readlineSync = require('readline-sync');
let libraryManager = new LibraryManager;

function add() {
    let menu = `----------------Thêm tài liệu----------------
    1. Thêm sách
    2. Thêm tạp chí
    3. Thêm báo
    0. Menu chính`;
    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question(`Enter your choice: `);
        switch (choice) {
            case 1:
                addBook();
                break;
            case 2:
                addMagazine();
                break;
            case 3:
                addNewspaper();
                break;
        }
    } while (choice !== 0);
}

function addBook() {
    console.log(`--------------Thêm sách----------------`);   
    let id = +readlineSync.question(`Enter id: `);
    let publishingCompany = readlineSync.question(`Enter publishing company: `);
    let releaseNumber = +readlineSync.question(`Enter release number: `);
    let author = readlineSync.question(`Enter author: `);
    let pageNumber = +readlineSync.question(`Enter page number: `);
    let book = new Book(id, publishingCompany, releaseNumber, author, pageNumber);
    libraryManager.add(book);
}

function addMagazine() {
    console.log(`--------------Thêm tạp chí----------------`);   
    let id = +readlineSync.question(`Enter id: `);
    let publishingCompany = readlineSync.question(`Enter publishing company: `);
    let releaseNumber = +readlineSync.question(`Enter release number: `);
    let releaseAmount = readlineSync.question(`Enter release amount: `);
    let releaseMonth = +readlineSync.question(`Enter release month: `);
    let magazine = new Magazine(id, publishingCompany, releaseNumber, releaseAmount, releaseMonth);
    libraryManager.add(magazine);
}

function addNewspaper() {
    console.log(`--------------Thêm báo----------------`);   
    let id = +readlineSync.question(`Enter id: `);
    let publishingCompany = readlineSync.question(`Enter publishing company: `);
    let releaseNumber = +readlineSync.question(`Enter release number: `);
    let releaseDate = readlineSync.question(`Enter release date: `);
    let newspaper = new Newspaper(id, publishingCompany, releaseNumber, releaseDate, );
    libraryManager.add(newspaper);
}

function deleteDocument() {
    console.log(`--------------Xóa tài liệu----------------`);
    
    let index = +readlineSync.question(`Enter id:`);
    libraryManager.remove(index);

}

function display() {
    let menu = `----------------Tài liệu----------------
    1. Tất cả
    2. Sách
    3. Tạp chí
    4. Báo
    0. Menu chính`;
    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question(`Enter your choice: `);
        switch (choice) {
            case 1:
                displayAll();
                break;
            case 2:
                displayBook();
                break;
            case 3:
                displayMagazine();
                break;
            case 4:
                displayNewspaper();
                break;
        }
    } while (choice !== 0) 
}

function displayAll() {
    console.log(`--------------Tài liệu----------------`);
    console.log(libraryManager.findAll());
}

function displayBook() {
    console.log(libraryManager.findByType(Book));
}

function displayMagazine() {
    console.log(libraryManager.findByType(Magazine));
}

function displayNewspaper() {
    console.log(libraryManager.findByType(Newspaper));
}

function searchById() {
    console.log(`--------------Tìm theo id----------------`);    
    let id = +readlineSync.question('Enter id: ');
    libraryManager.find(id);
}

function main() {
    let menu = `-----------------Menu ----------------
    1.Thêm tài liệu
    2. Xóa tài liệu
    3. Hiển thị tài liệu
    4. Tìm tài liệu
    0. Thoát`;
    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question(`Enter your choice: `)
        switch (choice) {
            case 1:
                add();
                break;
            case 2:
                deleteDocument();
                break;
            case 3:
                display();
                break;
            case 4:
                searchById();
                break;
        }
    } while (choice !== 0)
}

main();