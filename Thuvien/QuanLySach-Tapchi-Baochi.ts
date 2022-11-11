import {BookManager, Sach} from "./Sach";
import {Baochi, NewsManager} from "./Baochi";
import {MagManager, Tapchi} from "./Tapchi";

let tapnauan = new Sach(1,'Kim Dong',10,'DragonRF',30)
let hoclambo = new Sach(2,'Kim Dong',300,'Edward Johnson',50)

let sacdep = new Tapchi(3,'Phu Nu Viet Nam',30,'Ngoc Trinh',50,201022,10)
let suckhoe = new Tapchi(4,'Cuc quan ly ATTPVN',80,'GS-TS Nguyen Van A',60,150322,3)

let quansu = new Baochi(5,'Bao Dan Tri',1000,'TTXVN',60,190822,8,19)
let chinhtri = new Baochi(6,'TTXVN',3000,'TTXVN',20,111122,11,5)

BookManager.addBook(tapnauan);
BookManager.addBook(hoclambo);

MagManager.addMag(sacdep);
MagManager.addMag(suckhoe);

NewsManager.addNews(quansu);
NewsManager.addNews(chinhtri);

console.log('----Them----');

BookManager.displayBook();
MagManager.displayMag();
NewsManager.displayNews();


BookManager.deleteBook(1);
MagManager.deleteMag(3);
NewsManager.deleteNews(5);

console.log('----Sau khi xoa----');

BookManager.displayBook();
MagManager.displayMag();
NewsManager.displayNews();

let giadinh: Sach = new Sach(5,'Thanh Loan',65,'Quynh Nga',30)
let thethao: Tapchi = new Tapchi(7,'Thethao24/7',1000,'Thetheo24/7',20,51022,10)
let dantri: Baochi = new Baochi(9,'TTXVN',2000,'Le Hong Quang',15,61122,11,6)

BookManager.editBook(2,giadinh);
MagManager.editMag(4,thethao);
NewsManager.editNews(6,dantri);

console.log('----Sau khi sua----');

BookManager.displayBook();
MagManager.displayMag();
NewsManager.displayNews();


console.log('----Sau khi tim----')
BookManager.findBook(5);
NewsManager.findNews(9);
MagManager.findMag(7);


