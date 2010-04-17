// UNIX compatible changelog
// by Project PaoPei 2004 Japan
// This program shall be in the public domain.

//------------------//
/**
 * sakura editor用マクロ(JavaScript)
 *  changelogファイルにエントリーを追加
 *  (秀丸用changelog.macを移植)
 *  Version 1.00 Copyright(c) 2004 by matsumo
 */

// User defined vars //
// Set your mail address
var mead   ="<matsumo@localhost>";
// Set your name other than Windows USERNAME, if you like.
var myname ="matsumo";
//------------------//

//マクロを実行しているウインドウがchangelog.txtを開いているか確認
var fn = Editor.GetFilename();
if(fn.substr(fn.length-13) != "changelog.txt"){
	var Shell = new ActiveXObject("WScript.Shell");
	Shell.Popup("changelog.txtじゃない");
}else{
	dt = new Date();
	var m = "0" + (dt.getMonth() + 1);
	var d = "0" + dt.getDate();
	var today = dt.getYear() + "-" + m.substr(m.length-2) + "-" + d.substr(d.length-2);

	var r=0;
	for(var i=1; i<=Editor.GetLineCount(0); i++){
		if(Editor.GetLineStr(i).substr(0, 10) == today){
			r = i;
			break;
		}
	}

	var endlf;
	if (r == 0) // if today's date is not found, insert date
	{
		Editor.GoFileTop();
		Editor.InsText("\r\n" + today + "  " + myname + "  " + mead + "\r\n");
		endlf="\r\n\r\n";
	}
	else
	{
		Editor.Jump(r+1, 1);
		endlf="\r\n";
	}
	// insert item format
	var titleform = "\r\n\t* : " + endlf;
	Editor.InsText(titleform);
	Editor.Jump(4, 1);
	for(var i=0; i<3; i++){
		Editor.Right();
	}
}
