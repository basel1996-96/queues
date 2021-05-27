const prompt = require('prompt-sync')({sigint: true});

function countString(str, letter) {
    let count = 0;

  
    for (let i = 0; i < str.length; i++) {

  
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}


const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

const result = countString(string, letterToCheck);

console.log(result);


   
function removeduplicates (data) {
    return [ ...new Set(data)].sort().reverse()
}


console.log( removeduplicates(([1, 2, 4, 3, 2, 1, 4])));














function keysAndValues(data){
    var keys = Object.keys(data),
        values = keys.map(function (key) {
            return data[key];
        });
    
    return [keys, values]; 
}
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
 
