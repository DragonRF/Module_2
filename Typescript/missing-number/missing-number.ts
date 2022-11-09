let arr = [0, 2, 3, 5, 7, 8, 9, 10]
let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr2 = []

for (let i = 0; i < arr1.length;i++){
    if(arr.indexOf(arr1[i]) === -1){
        arr2.push(arr1[i])
    }
    console.log(arr2)
}