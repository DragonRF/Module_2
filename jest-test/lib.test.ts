import {FizzBuzz} from "./lib";
describe('FizzBuzz()', () => {
    test('Phai tra ve gia tri FizzBuzz', () =>{
        let result = FizzBuzz(15);
        expect(result).toBe('FizzBuzz')
    });
});