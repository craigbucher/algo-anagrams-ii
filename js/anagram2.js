exports.anagramsFor = function(word, listOfWords) {
    const result = [];
    string1 = word.toLowerCase();
    let arr1 = string1.split(' ').join('').split('').sort();
    for (let i = 0; i < listOfWords.length; i++){
        let string2 = listOfWords[i].toLowerCase();
        let arr2 = string2.split(' ').join('').split('').sort(); 
        if ((arr1.length !== arr2.length)){
            continue;
        }
        for (let j = 0; j < arr1.length; j++){	
            if (arr1[j] !== arr2[j]){	
              continue;	
            }	
        }
        result.push(listOfWords[i]);
    }
    return result;
};
console.log(exports.anagramsFor('threads', ["threads", "trashed", "hardest", "hatreds", "hounds"]))