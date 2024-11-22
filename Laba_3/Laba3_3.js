function processText(inputText) {
   
    var cleanedText = inputText.replace(/^\s+|\s+$/g, '');
    
    
    cleanedText = cleanedText.replace(/\s+/g, ' ');

    
    if (cleanedText.charAt(cleanedText.length - 1) !== '.') {
        return 'Ошибка: текст должен заканчиваться точкой.';
    }

    return cleanedText;
}


if (WScript.Arguments.length === 0) {
    WScript.Echo('Ошибка: не передан текст для обработки.');
} else {
    var originalText = WScript.Arguments(0);
    
    
    WScript.Echo("Исходный текст: " + originalText);
    var processedText = processText(originalText);
    WScript.Echo("Преобразованный текст: " + processedText);
}