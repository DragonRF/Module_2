function numberAppearence(numbers: number[], value: number) {
    let count: number = 0

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == value) {
            count++
        }
    }
    console.log(`Phan tu ${value} xuat hien ${count} lan `)
}
let arr = [1,2,2,3,4,5,6,7,7,8,9,10,11,22,22]
numberAppearence(arr,2)