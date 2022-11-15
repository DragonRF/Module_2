import {QLCB} from "./staff/QLCB";
import {CongNhan} from "./staff/CongNhan";
import {KySu} from "./staff/KySu";
import {NhanVien} from "./staff/NhanVien";


let readlineSync = require('readline-sync');
let employeeManagement = new QLCB();

function addCN(){
    console.log('------Hien thi form them moi cong nhan-------');
    let name = readlineSync.question('Enter name: ');
    let age = +readlineSync.question('Enter age: ');
    let gender = readlineSync.question('Enter gender: ');
    let address = readlineSync.question('Enter address: ');
    let rank = +readlineSync.question('Enter rank: ')
    let congnhan = new CongNhan(name,age,gender,address,rank);
    employeeManagement.add(congnhan);
}

function addKS(){
    console.log('------Hien thi form them moi ky su-------');
    let name = readlineSync.question('Enter name: ');
    let age = +readlineSync.question('Enter age: ');
    let gender = readlineSync.question('Enter gender: ');
    let address = readlineSync.question('Enter address: ');
    let majors = readlineSync.question('Enter majors: ')
    let kysu = new KySu(name,age,gender,address,majors);
    employeeManagement.add(kysu);
}

function addNV(){
    console.log('------Hien thi form them moi nhan vien-------');
    let name = readlineSync.question('Enter name: ');
    let age = +readlineSync.question('Enter age: ');
    let gender = readlineSync.question('Enter gender: ');
    let address = readlineSync.question('Enter address: ');
    let job = readlineSync.question('Enter job: ')
    let nhanvien = new NhanVien(name,age,gender,address,job);
    employeeManagement.add(nhanvien);
}
function find(){
    let name = readlineSync.question('Enter name: ');
    let a = employeeManagement.find(name);
    if (a.length === 0){
        console.log('Cannot found')
    } else {
        a.forEach(obj => console.log(obj))
    }
}
function display(){
    console.log('-----Hien thi danh sach-----')
    console.log(employeeManagement.display())
}

function main(){
    let menu = `-------Menu chinh-------
    1. Them danh sach
    2. Hien thi danh sach
    3. Tim can bo
    0. Thoat`;
    let menu2 = `-------Chon vi tri:--------
    1. Them Cong Nhan
    2. Them Ky Su
    3. Them Nhan Vien
   `

    let choice = -1;
    let choice2 = -1
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice: ');
        switch (choice){
            case 1:
                console.log(menu2)
                choice2 = +readlineSync.question('Enter Choice 2: ');
                switch (choice2) {
                    case 1:
                        addCN();
                        break
                    case 2:
                        addKS();
                        break
                    case 3:
                        addNV();
                        break
                }
            case 2:
                display();
                break
            case 3:
                find()
                break
        }
    }
    while (choice !== 0)
}
main()
