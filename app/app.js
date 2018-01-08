let numberArray = [1, 2, 5, 7];

function multiplyNumbers(array) {
    let total = 1;
    numberArray.forEach(number => {
        total = total * number;
    })
    return total;
}

let dudes = [{
    name: "Hedwig",
    age: 3
}, {
    name: "Crookshanks",
    age: 5
}];
