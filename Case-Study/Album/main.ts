import {Song} from "./song";
import {Album} from "./album";
import {AlbumManager} from "./album-manager";

let input = require('readline-sync')
let albumManager = new AlbumManager()
let album1 = new Album('Sensational',30,'R&B,Hip-hop')
let song1 = new Song('Without Me','4:58','Eminem')
let song2 = new Song('Larger Than Life','3:55','Backstreet Boys')
let song3 = new Song('Around The World','3:36','ATC')
let song4 = new Song('STAY','2:20','The Kid LAROI, Justin Bieber')
albumManager.add(album1)
album1.add(song1)
album1.add(song2)
album1.add(song3)
album1.add(song4)

function main(){
    let menu = `----Menu----
    1. Đăng nhập
    2. Đăng ký
    0. Thoát
    `

    let choice = -1;
    do{
        console.log(menu)
        choice = +input.question('Enter Choice:')
        switch (choice){
            case 1:
                login();
                break;
            case 2:
                register();
                break;
            case 3:
                break;
        }
    }while (choice !== 0)
}
main()


function login(){

}

function register(){

}