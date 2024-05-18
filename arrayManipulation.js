function processArray(array) {
    let resultofarray = [];
    array.forEach(number => {
        let square;
        let triple;
        if (number % 2 === 0) {
            square = number ** 2;
            resultofarray.push(square);
        } else {
            triple = number * 3;
            resultofarray.push(triple);
        }
    });
    return resultofarray;
}

const arr = [2, 3, 4, 5, 6, 7];
const resultofarray = processArray(arr);
console.log(resultofarray);
