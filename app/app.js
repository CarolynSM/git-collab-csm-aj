let numberArray = [1, 2, 5, 7];

function multiplyNumbers(array) {
    let total = 1;
    numberArray.forEach(number => {
        total = total * number;
    })
    return total;
}

let arrayOfObjects = [
  {
    name: "Carolyn",
    age: 29
  }, {
    name: "Amber",
    age: 28
  }
];
