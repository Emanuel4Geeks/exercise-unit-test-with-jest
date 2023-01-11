// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function () {
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its supported to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;

    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be close to 106.58333 yens", function () {
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(5.5)

    // if 1 dollar are 1.206 yens, then 5.5 dollars should be (5.5 * 127.9 / 1.2)
    const expected = 5.5 * 127.9 / 1.2;

    // this is the comparison for the unit test
    expect(yen).toBeCloseTo(expected, 5); //1 dollar are 106.58333 yens, then 5.5 dollars should be = (5.5 * 127.9 / 1.2)
})

test("One yen should be close to 0.0062548866 pounds", function () {
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(300)

    // if 1 yen are 0.0062548866 pounds, then 300 dollars should be (300 * 0.8 / 127.9 )
    const expected = 300 * 0.8 / 127.9;

    // this is the comparison for the unit test
    expect(pound).toBeCloseTo(expected, 10); //1 yen are 0.0062548866 pounds, then 300 yens should be = (300 * 0.8 / 127.9)
})