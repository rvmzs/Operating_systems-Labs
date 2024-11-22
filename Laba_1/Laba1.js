var n = 5;
var factorial = 1;
var sum = 0;

for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        factorial *= j;
    }
    sum += factorial / Math.pow(i, i);
    factorial = 1;
}

WScript.Echo("Сумма первых " + n + " элементов равна: " + sum);