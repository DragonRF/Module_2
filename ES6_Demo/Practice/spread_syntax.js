function replace(array, from, to, elements) {

    array.splice.apply(array, [from, to - from].concat(elements))

}
let testArray = [1, 2, 100, 100, 6]
let replaceArray = [3, 4, 5]
replace(testArray, 2, 4, replaceArray)
console.log(testArray)


function copyReplace(array, from, to, elements) {

    return array.slice(0, from).concat(elements).concat(array.slice(to))

}
let myArray = [1, 2, 100, 200, 6];
let myRArray = [3, 4, 5];

console.log(copyReplace(myArray, 2, 4, myRArray))

let customerOrder = []


function recordOrders(time) {

    customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})

}
let myFood = ["coffee", "yogurt", "pizza"]
recordOrders(new Date, ...myFood);
console.log(customerOrder)