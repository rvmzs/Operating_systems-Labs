if (WScript.Arguments.Count() == 4 || WScript.Arguments.Count() == 5) {
    var sourceDir = WScript.Arguments(0);     // путь к исходному каталогу
    var fileName = WScript.Arguments(1);      // имя исходного файла
    var resultDir = WScript.Arguments(2);     // путь к результирующему каталогу
    var outputFile = WScript.Arguments(3);    

    
    var shell = WScript.CreateObject("WScript.Shell");
   
    shell.Run("%COMSPEC% /c mkdir " + sourceDir, 0, true);

    // 1.2 С помощью Блокнота создать исходный файл
    var sourceFilePath = sourceDir + "\\" + fileName;
    shell.Run("notepad.exe " + sourceFilePath, 1, false);

    shell.Run("%COMSPEC% /c mkdir " + resultDir, 0, true);

    shell.Run("%COMSPEC% /c copy " + sourceFilePath + " " + resultDir, 0, true);

    var resultFilePath = resultDir + "\\" + fileName;
    shell.Run("notepad.exe " + resultFilePath, 1, false);

    if (WScript.Arguments.Count() == 5) {
        shell.Run("%COMSPEC% /c fc " + sourceFilePath + " " + resultFilePath + ">" + outputFile, 0, true);
    } else {
        shell.Run("%COMSPEC% /k fc " + sourceFilePath + " " + resultFilePath, 1, true);
    }

    WScript.Echo("its allright.");
} else {
    WScript.Echo("Неправильное количество аргументов.")
}