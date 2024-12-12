function processText(inputText) {
    var maxLength = 1000; // NL - максимальная длина текста
    var maxLineLength = 100; // NS - максимальная длина строки
    var maxWordLength = 10; // NW - максимальная длина слова

    
    if (inputText.length > maxLength) {
        return 'Ошибка: текст превышает максимальную длину в ' + maxLength + ' символов.';
    }

   
    var cleanedText = inputText.replace(/^\s+|\s+$/g, '');
    cleanedText = cleanedText.replace(/\s+/g, ' ');

   
    var words = cleanedText.split(' ');
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxWordLength) {
            return 'Ошибка: слово &quot;' + words[i] + '&quot; превышает максимальную длину в ' + maxWordLength + ' символов.';
        }
    }

    var lines = cleanedText.split('\n');
    for (var j = 0; j < lines.length; j++) {
        if (lines[j].length > maxLineLength) {
            return 'Ошибка: строка превышает максимальную длину в ' + maxLineLength + ' символов.';
        }
    }


    if (cleanedText.charAt(cleanedText.length - 1) !== '.') {
        return 'Ошибка: текст должен заканчиваться точкой.';
    }

    return cleanedText;
}

if (WScript.Arguments.length < 2) {
    WScript.Echo('Ошибка: необходимо передать путь к исходному файлу и путь к выходному файлу.');
} else {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var inputFilePath = WScript.Arguments(0);
    var outputFilePath = WScript.Arguments(1);

    // Чтение содержимого файла
    if (fso.FileExists(inputFilePath)) {
        var inputFile = fso.OpenTextFile(inputFilePath, 1, false, -1); // UTF-8
        var originalText = inputFile.ReadAll();
        inputFile.Close();

        WScript.Echo("Исходный текст: " + originalText);
        var processedText = processText(originalText);
        WScript.Echo("Преобразованный текст: " + processedText);

    
        var outputFile = fso.OpenTextFile(outputFilePath, 2, true, -1); // UTF-8
        outputFile.Write(processedText);
        outputFile.Close();
        WScript.Echo("Обработанный текст записан в файл: " + outputFilePath);
    } else {
        WScript.Echo("Ошибка: файл не найден - " + inputFilePath);
    }
}