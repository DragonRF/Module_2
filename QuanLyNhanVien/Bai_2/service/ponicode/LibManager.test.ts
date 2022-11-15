import * as LibManager from "../LibManager"
// @ponicode
describe("LibManager.LibraryManager.addBook", () => {
    let inst: any

    beforeEach(() => {
        inst = new LibManager.LibraryManager()
    })

    test("0", () => {
        let result: any = inst.addBook("bed-free@tutanota.de")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.addBook("TestUpperCase@Example.com")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.addBook("user@host:300")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.addBook("ponicode.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.addBook("user1+user2@mycompany.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.addBook("")
        expect(result).toMatchSnapshot()
    })
})
