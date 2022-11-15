"use strict";
exports.__esModule = true;
exports.FizzBuzz = void 0;
function FizzBuzz(input) {
    if (typeof input !== 'number')
        throw new Error('Input should be a number');
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    return input;
}
exports.FizzBuzz = FizzBuzz;
FizzBuzz(15);
