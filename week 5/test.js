function calculate(a, b, callback) {
    callback(a + b);
}

function displayResult(result) {
    console.log('The result is: ' + result);
}

calculate(5, 7, displayResult);