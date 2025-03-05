// Import the function sum from the app.js file

// Start your first test
test("One dollar should be 146.26 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = (3.5 / 1.07) * 156.6; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(511.91588785046724); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})