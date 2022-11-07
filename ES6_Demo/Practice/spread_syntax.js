function replace(array, from, to, elements) {

    array.splice.apply(array, [from, to - from].concat(elements))

}
let testArray = [1, 2, 100, 100, 6]
let replaceArray = [3, 4, 5]
replace(testArray, 2, 4, replaceArray)
console.log(testArray)