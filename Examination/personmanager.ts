import {Person} from "./person";

export class PersonManager{
    listPerson: Person[] = [];

    add(person: Person): void {
        this.listPerson.push(person)
    }

    edit(id: number,t: Person): void{
        let index = this.findById(id);
        if (index === -1) {
            console.log('Không tồn tại ID người yêu này!')
        } else {
            this.listPerson[index] = t;
        }
    }

    findById(id: number): number {
        for (let i = 0; i < this.listPerson.length; i++) {
            if (id === this.listPerson[i].id) {
                return i;
            }
        }
        return -1;
    }
    show(): Person[] {
        return this.listPerson;
    }

    remove(idPerson: number) {
        for (let i = 0; i < this.listPerson.length; i++) {
            if(this.listPerson[i].id === idPerson){
                this.listPerson.splice(i , 1);
            }
        }
    }
}

let input = require('readline-sync')
let personManager = new PersonManager();

function main(){
    let choice = -1;
    do {
        console.log(`
        1. Quan ly nguoi yeu
        0. Thoat`)
        choice = +input.question('Enter choice : ')
        switch (choice){
            case 1:
                showMenuPerson();
                break;
            case 0:
                break;
        }
    }while (choice!== 0);
}

function showMenuPerson(){
    let choice = -1;
    do {
        console.log(`
        ----Quan Ly Nguoi Yeu----
        1. Them nguoi yeu
        2. Sua nguoi yeu
        3. Hien thi nguoi yeu
        4. Tim nguoi yeu
        5. Xoa nguoi yeu
        0. Thoat
        `)
        choice = +input.question('Enter choice: ')
        switch (choice) {
            case 1:
                addPerson();
                break;
            case 2:
                editPerson();
                break;
            case 3:
                findAllPerson()
                break;
            case 4:
                findByID()
                break;
            case 5:
                deletePerson()
                break;
        }
    }while (choice !== 0)
}

function addPerson(){
    console.log('------Them nguoi yeu------')
    let id = +input.question('Enter ID: ')
    let personName = input.question('Enter Person Name: ')
    let zodiac = input.question('Enter Zodiac: ')
    let home = input.question('Enter Home: ')
    let yearofbirth = input.question('Enter birth year: ')
    let hobbies = input.question('Enter hobbies: ')
    let person = new Person(id,personName,zodiac,home,yearofbirth,hobbies)
    personManager.add(person)
}

function findAllPerson() {
    console.log('------Danh sach nguoi yeu:------')
    console.log(personManager.show())
}

function findByID(){
    console.log('-------Tim ID nguoi yeu-------');
    let index = +input.question('Enter ID:')
    console.log(personManager.findById(index))

}

function editPerson(){
    console.log('------Sua nguoi yeu------')
    let idedit = +input.question('Enter ID edit: ')
    let id = +input.question('Enter ID: ')
    let personName = input.question('Enter Person Name: ')
    let zodiac = input.question('Enter Zodiac: ')
    let home = input.question('Enter Home: ')
    let yearofbirth = input.question('Enter birth year: ')
    let hobbies = input.question('Enter hobbies: ')
    let person = new Person(id,personName,zodiac,home,yearofbirth,hobbies)
    personManager.edit(idedit,person)
}


function deletePerson(){
    let index = +input.question('Enter ID:')
    personManager.remove(index)
}

main()