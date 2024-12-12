if (WScript.Arguments.Count() == 4 || WScript.Arguments.Count() == 5) {
    var sourceDir = WScript.Arguments(0);
    var fileName = WScript.Arguments(1);
    var resultDir = WScript.Arguments(2);
    var outputFile = WScript.Arguments(3);

 
    var fso = WScript.CreateObject("Scripting.FileSystemObject");


    if (!fso.FolderExists(sourceDir)) {
        fso.CreateFolder(sourceDir);
    }

  
    var sourceFilePath = sourceDir + "\\" + fileName;
    var sourceFile = fso.CreateTextFile(sourceFilePath, true);
    sourceFile.Close();

    
    if (!fso.FolderExists(resultDir)) {
        fso.CreateFolder(resultDir);
    }

    var resultFilePath = resultDir + "\\" + fileName;
    fso.CopyFile(sourceFilePath, resultFilePath);

    
    var shell = WScript.CreateObject("WScript.Shell");
    shell.Run("notepad.exe " + resultFilePath, 1, false);

    
    var sourceFileContent = fso.OpenTextFile(sourceFilePath, 1).ReadAll();
    var resultFileContent = fso.OpenTextFile(resultFilePath, 1).ReadAll();

    var filesAreEqual = (sourceFileContent === resultFileContent);

    if (WScript.Arguments.Count() == 5) {
        var comparisonResult = fso.OpenTextFile(outputFile, 2, true);
        if (filesAreEqual) {
            comparisonResult.WriteLine("Файлы совпадают.");
        } else {
            comparisonResult.WriteLine("Файлы не равны.");
        }
        comparisonResult.Close();
    } else {
        if (filesAreEqual) {
            WScript.Echo("Файлы совпадают.");
        } else {
            WScript.Echo("Файлы не равны.");
        }
    }

    WScript.Echo("It's all right.");
} else {
    WScript.Echo("Неправильное количество аргументов.");
}
