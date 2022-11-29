import {MenuManager} from "./Restaurant/menuManager";
import {DishManager} from "./Restaurant/dishManager";

let input = require('readline-sync')
let menuManager = new DishManager()
let steak = new MenuManager(1,'Reverse Steak',120000,'Meat','Bò bít tết đảo ngược',5)
let wine = new MenuManager(2,'Champaigne',60000,'Wine','Sâm-panh', 4)
let potato = new MenuManager(3,'Mashed Potatos',75000,'Extra','Khoai tây nghiền',6)
let beer = new MenuManager(4,'Strongbow',30000,'Beer','Bia Strongbow',8)
let juice = new MenuManager(5,'Orange Juice',25000,'Juice','Nước cam ép',7)
let pasta = new MenuManager(6,'Fettuccine Alfredo',80000,'Noodles','Mì trộn sốt kem bơ',9)
let soup = new MenuManager(7,'Wedding Soup',75000,'Soup','Súp đám cưới',7)
menuManager.add(steak)
menuManager.add(wine)
menuManager.add(potato)
menuManager.add(beer)
menuManager.add(juice)
menuManager.add(pasta)
menuManager.add(soup)

let types = ['Meet','Wine','Extra','Beer','Juice','Noodles','Soup']
function main(){
    let menu = `---------Menu sản phẩm---------
1. Hiện danh sách món ăn
2. Thêm món ăn theo mã ID
3. Sửa món ăn theo mã ID
4. Xóa món ăn theo mã ID
5. Tìm món ăn theo tên
6. Hiện các loại món ăn, chọn và hiện ra các món ăn loại đó
7. Sắp xếp món ăn theo giá tăng dần 
8. Hiện các loại món ăn, chọn và xóa hết món của loại đó
0. Thoát`
    let choice = -1
    do {
        console.log(menu)
        choice = +input.question(`Enter choice : `)
        switch (choice) {
            case 1:
                show()
                break;
            case 2 :
                addDish()
                break;
            case 3:
                editDish();
                break;
            case 4:
                removeDish()
                break;
            case 5:
                findByNameDish()
                break;
            case 6:
                findByPrice()
                break;
            case 7:
                sortUp()
                break;
            case 8:
                clearType()
                break;
            case 0:
                break;

        }
    } while (choice !== 0)
}
main()

function show() {
    console.log(`-------Danh sách món ăn-----`)
    console.log(menuManager.show())
}

function addDish() {
    let id = +input.question(`Enter id : `)
    let dishName = input.question(`Enter dish Name : `)
    let price = input.question(`Enter price : `)
    let typeIndex = +input.question(`Choose type : \n 1. Meet \n 2.Wine \n 3.Extra \n 4.Beer \n 5.Juice\n 6.Noodles\n 7.Soup \n`)
    let type = types[typeIndex -1]
    let describe = input.question(`Enter describe : `)
    let amount = input.question(`Enter amount : `)
    let menu = new MenuManager(id, dishName, price, type, describe, amount)
    menuManager.add(menu)
}
function editDish(){
    let id = +input.question(`Enter id for changing : `)
    let dishName = input.question(`Enter dish Name : `)
    let price = input.question(`Enter price : `)
    let type = input.question(`Enter type : `)
    let describe = input.question(`Enter describe : `)
    let amount = input.question(`Enter amount : `)
    let menu = new MenuManager(id, dishName, price, type, describe, amount)
    menuManager.edit(id,menu)
}
function removeDish(){
    let id = +input.question(`Enter id for deleting : `)
    menuManager.remove(id)
}
function findByNameDish(){
    let name = input.question(`Nhập tên món ăn muốn tìm : `)
    console.log(menuManager.findByName(name))
}
function findByPrice() {
    console.log(types)
    let type = input.question(`Nhập loai món ăn muốn tìm : `)
    console.log( menuManager.findByType(type))
}
function sortUp(){
    console.log(menuManager.sortPriceUp())
}
function clearType() {
    let typeIndex = +input.question(`Choose type : \n 1. Meet \n 2.Wine \n 3.Extra \n 4.Beer \n 5.Juice\n 6.Noodles\n 7.Soup \n`)
    let type2 = types[typeIndex - 1];
    menuManager.removeByType(type2)

}