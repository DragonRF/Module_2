import {QLCB} from "./staff/QLCB";
import {CanBo} from "./model/CanBo";
import {CongNhan} from "./staff/CongNhan";
import {KySu} from "./staff/KySu";
import {NhanVien} from "./staff/NhanVien";

let nhanvien1 = new NhanVien('Tran Thi T',24,false,'Thai Binh','Thu Ki');
let congnhan1 = new CongNhan('Nguyen Van A',30,true,'Nam Dinh',5);
let kysu1 = new KySu('Dang Van H',28,true,'Phu Tho','Ky Su May Moc');

let qlcb = new QLCB()
qlcb.add(nhanvien1);
qlcb.add(congnhan1);
qlcb.add(kysu1);

let a = qlcb.find('Nguyen Van A')
if (a.length === 0){
    console.log('Cannot found')
} else{
    a.forEach(obj => console.log(obj))
}
let b = a.slice().sort((o1,o2) => o2.age - o1.age)
console.log(b[0])

