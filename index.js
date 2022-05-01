
let presentValue = [];
let suduKubox = [6, 0, 0, 1, 9, 5, 0, 0, 0];
for (var i = 0; i < suduKubox.length; i++) {
    console.log(suduKubox[i]);
}

let presentValues = [];
for (var j = 0; j < suduKubox.length; j++) {
    if (suduKubox[j] === 0) {
        suduKubox[j] = possibleValues[0];
        possibleValues.shift();
    }
    console.log(suduKubox[j]);
}
let possibleValues = [1, 2, 3, 4, 5, 6, 7, 9];
console.log(possibleValues[0]);
possibleValues.pop(1);
console.log(possibleValues[0]);
possibleValues.indexOf[1];
// console.log(possibleValues[0]);
// possibleValues.splice(0,4);
possibleValues = possibleValues.filter(function (el) {
    return presentValue.indexOf(el) < 0;
});
