class User {
    private _name: string;
    private _email: string;
    _role: number;


    constructor(name: string, email: string, role: number) {
        this._name = name;
        this._email = email;
        this._role = role;
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

    getRole(): number {
        return this._role;
    }

    setRole(value: number) {
        this._role = value;
    }
}

class UserManager {
    private product:User[] = [];

    constructor() {
    }

    getInfo() {
        return this.product;
    }
    getAll(product: User) {
        this.product.push(product);
    }
    All(product: User) {
        if ((product.getRole()) === 1) {
            console.log('ADMIN');
        }else {
            console.log('USER');
        }
    }
}

let user0 = new User('Nguyen Van A', 'nguyenvana@gmail.com',1);
let user1 = new User('Nguyen Van B', 'nguyenvanb@gmail.com',2);
let user2 = new User('Nguyen Van C', 'nguyenvanc@gmail.com',2);

let userManager = new UserManager();

userManager.getAll(user0)
userManager.getAll(user1)
userManager.getAll(user2)

console.log(userManager.getInfo())

console.log(userManager.All(user0))
