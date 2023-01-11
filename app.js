// this is my function that sums two numbers
const sum = (a, b) => a + b;

// just a console log for ourselves.
// console.log(sum(7, 3))


// one euro is:
const oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(amount) {
    return oneEuroIs.USD * amount;
}

function fromDollarToYen(amount) {
    return amount * oneEuroIs.JPY / oneEuroIs.USD;
}

function fromYenToPound(amount) {
    return amount * oneEuroIs.GBP / oneEuroIs.JPY;
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
