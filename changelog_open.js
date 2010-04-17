// UNIX compatible changelog
// by Project PaoPei 2004 Japan
// This program shall be in the public domain.

//------------------//
/**
 * sakura editor用マクロ(JavaScript)
 *  changelogファイルを開く
 *  (秀丸用changelog.macを移植)
 *  Version 1.00 Copyright(c) 2004 by matsumo
 */


var WshShell = new ActiveXObject("WScript.Shell");
var WshSysEnv = WshShell.Environment("PROCESS");

// Set name to USERNAME, if no name is specified above.
var user =WshSysEnv("USERNAME");
// Set changelog path
var filepath;
var path =WshSysEnv("HOME");
if (path=="") 
{
	filepath = "C:\\Documents and Settings\\" + user + "\\changelog.txt";
}
else 
{
	filepath = path + "\\changelog.txt";
}
// Process starts
// open changelog file
Editor.FileOpen(filepath);
