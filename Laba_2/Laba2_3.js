
function processText(inputText) {
    
    var cleanedText = inputText.replace(/^\s+|\s+$/g, '');
    
   
    cleanedText = cleanedText.replace(/\s+/g, ' ');

    
    if (cleanedText.charAt(cleanedText.length - 1) !== '.') {
        return 'Ошибка. Предложение должно заканчиваться точкой!';
    }

    return cleanedText;
}


var originalText = "   Этот                 текст    является примеро     м  .  ";


WScript.Echo("Исходный текст: " + originalText);
var processedText = processText(originalText);
WScript.Echo("Измененный текст: " + processedText);
