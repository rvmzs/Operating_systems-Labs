if(WScript.Arguments.count() == 3){
	var address = WScript.Arguments(0);
	var name_p = WScript.Arguments(1);
	var mode = WScript.Arguments(2);
	var Shell = WScript.CreateObject("WScript.Shell");
	Shell.Run(("notepad.exe " + address + name_p), 1, true);
	if(mode == "cmd")
		Shell.Run("cmd.exe /K cscript " + address + name_p);
	else if(mode == "window")
		Shell.Run("cmd.exe /K wscript " + address + name_p + "&exit");
	else 
		WScript.Echo("Ошибка при выборе режима");
}else{
		WScript.Echo("Ошибка при вводе данных");
}
