function matrixElementsSum(matrix) {
    let sum = 0;
    matrix[0].forEach(element => {
        sum += element;
    });
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i-1][j] !== 0) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}

let matrix = [[0,2,1,1], [0,5,0,0], [2,0,3,3]];
console.log(matrixElementsSum(matrix));