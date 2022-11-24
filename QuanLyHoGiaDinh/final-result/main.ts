import {Family} from "./Family";
import {Person} from "./Person";
import {Town} from "./Town";

let thanhXuan = new Town();
let c09 = new Family(1);
let nhuAnhCh = new Person(1,'Dao Nhu Anh', 81, 'Giang vien');
let Ning = new Person(2,'TDVL', 21, 'Giang vien');

c09.add(nhuAnhCh);
c09.add(Ning);


thanhXuan.add(c09);

console.log(thanhXuan.show())