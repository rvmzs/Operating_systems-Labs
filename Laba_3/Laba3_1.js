
function factorial(num) {
    if (num <= 1) {
        return 1; 
    } else {
        return num * factorial(num - 1); 
    }
}


function calculateSum(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += factorial(i) / Math.pow(i,i);
    }
    return sum;
}


if (WScript.Arguments.length !== 1) {
    WScript.Echo("Usage: cscript sum_series.js <n>");
} else {
    var n = parseInt(WScript.Arguments(0));
    if (isNaN(n) || n <= 0) {
        WScript.Echo("Please provide a positive integer for n.");
    } else {
        var result = calculateSum(n);
        WScript.Echo("The sum of the first " + n + " terms is: " + result);
    }
}