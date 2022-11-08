class Staff {
    private _name: string;
    private _email: string;
    private _age: number;


    constructor(name: string, email: string, age: number) {
        this._name = name;
        this._email = email;
        this._age = age;
    }


    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getEmail(): string {
        return this._email;
    }

    setEmail(value: string) {
        this._email = value;
    }

    getAge(): number {
        return this._age;
    }

    setAge(value: number) {
        this._age = value;
    }
}

let staff = new Staff('Staff 1','staff@gmail.com',20);
let nameStaff = staff.getName();

console.log(nameStaff); // Staff 1

staff.setName('Staff 2');

let currentNameStaff = staff.getName();

console.log(currentNameStaff) // Staff 2
