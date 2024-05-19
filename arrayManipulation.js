export function processArray(array) {
    let resultOfArray = [];
    array.forEach(number => {
        if (number % 2 === 0) {
            let square = number ** 2;
            resultOfArray.push(square);
        } else {
            let triple = number * 3;
            resultOfArray.push(triple);
        }
    });
    return resultOfArray;
  }
  
  export function formatArrayString(names, resultOfArray) {
    let resultOfNames = [];
    let length = Math.min(names.length, resultOfArray.length); // Ensure we only iterate over the shortest array
  
    for (let i = 0; i < length; i++) {
        let result = resultOfArray[i] % 2 === 0 ?
            names[i].toUpperCase() :
            names[i].toLowerCase();
        resultOfNames.push(result);
    }
    return resultOfNames;
}

