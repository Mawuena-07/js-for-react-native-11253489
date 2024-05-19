const  {profileArray, formatArrayString} = require ( './arrayManipulation');

function createUserProfiles(fruitNames, resultofnames){
    let profileArray = [];
    let ID = 0;
    function autoId(){
        return ++ID;
    }
    for (let i = 0; i < fruitNames.length + 1; i++) {
        let userProfile = {
            id: autoId(),
            originalName: fruitNames[i],
            modifiedName: resultofnames[i]
        };
        profileArray.push(userProfile);
    }

    return profileArray;
}

//console.log(ID);
//console.log(fruitNames);
//console.log(resultofnames);
const profiles = createUserProfiles(fruitNames, resultofnames);
console.log(profiles);
