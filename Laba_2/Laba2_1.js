// Рекурсивная 
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



    var n = 5;
    if (isNaN(n) || n <= 0) {
        WScript.Echo("Введите положительное n.");
    } else {
        var result = calculateSum(n);
        WScript.Echo("Сумма первых  " + n + " элементов равна: " + result);
    }
