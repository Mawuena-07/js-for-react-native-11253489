function processArray(array) {
    let resultOfArray = [];
    array.forEach(number => {
        let square;
        let triple;
        if (number % 2 === 0) {
            square = number ** 2;
            resultOfArray.push(square);
        } else {
            triple = number * 3;
            resultOfArray.push(triple);
        }
    });
    return resultOfArray;
}

const arr = [2, 3, 4, 5, 6, 7];
const resultOfArray = processArray(arr);

function formatArrayString(names, resultOfArray) {
    let resultofnames = [];
    for (let i = 0; i < resultOfArray.length + 1; i++) {
        let result = resultOfArray[i] % 2 === 0 ?
            names[i].toUpperCase():
        names[i].toLowerCase();
        
        resultofnames.push(result);
    }
    return resultofnames;
}

const fruitNames = ['Apple', 'Orange', 'Melon', 'Pawpaw', 'Berry', 'Mango', 'Cashew'];
const resultofnames = formatArrayString(fruitNames, resultOfArray);
console.log(resultofnames);





