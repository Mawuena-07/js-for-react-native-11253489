const { processArray, formatArrayString } = require('./arrayManipulation');

function createUserProfiles(fruitNames, resultOfNames) {
    let profileArray = [];
    let ID = 0;

    function autoId() {
        return ++ID;
    }

    let length = Math.min(fruitNames.length, resultOfNames.length); // Ensure we only iterate over the shortest array

    for (let i = 0; i < length; i++) {
        let userProfile = {
            id: autoId(),
            originalName: fruitNames[i],
            modifiedName: resultOfNames[i]
        };
        profileArray.push(userProfile);
    }

    return profileArray;
}
const fruitNames = ['Apple', 'Orange', 'Melon', 'Pawpaw', 'Berry', 'Mango'];
const arr = [2, 3, 4, 5, 6];
const resultOfArray = processArray(arr);
const resultOfNames = formatArrayString(fruitNames, resultOfArray);
const profiles = createUserProfiles(fruitNames, resultOfNames);

console.log(profiles);