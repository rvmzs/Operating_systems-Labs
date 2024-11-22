
function calculateSum(n, x) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += Math.sin(i * x) / Math.pow(2, i); 
    }
    return sum;
}


if (WScript.Arguments.length !== 2) {
    WScript.Echo("Usage: cscript sum_series.js <n> <x>");
} else {
    var n = parseInt(WScript.Arguments(0));
    var x = parseFloat(WScript.Arguments(1));
    if (isNaN(n) || n <= 0 || isNaN(x)) {
        WScript.Echo("Please provide a positive integer for n and a numerical value for x.");
    } else {
        var result = calculateSum(n, x);
        WScript.Echo("The sum of the series for n = " + n + " and x = " + x + " is: " + result);
    }
}