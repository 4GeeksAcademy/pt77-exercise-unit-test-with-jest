// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen= (dollar) => {
   return (dollar / 1.07) * 156.5
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { fromDollarToYen };
