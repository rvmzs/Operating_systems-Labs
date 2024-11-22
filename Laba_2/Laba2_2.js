
function calculateSum(n, x) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += Math.sin(i * x) / Math.pow(2, i);
    }
    return sum;
}



    var n = 5;
    var x = 1.57;
    if (isNaN(n) || n <= 0 || isNaN(x)) {
        WScript.Echo("Please provide a positive integer for n and a numerical value for x.");
    } else {
        var result = calculateSum(n, x);
        WScript.Echo("The sum of the series for n = " + n + " and x = " + x + " is: " + result);
    }
