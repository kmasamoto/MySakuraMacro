s = InputBox("新規関数名を入力してください。");
Editor.ExecCommand("ruby Z:\\myruby\\genrb.rb -func " + s, 0x01);
Editor.FileOpen("Z:\\myruby\\"+s+".rb");

// Javascript 版 InputBox
function InputBox( msg ){
	var VBS_CODE = 'inputbox("' + msg + '")';
	var scriptCtl = new ActiveXObject("ScriptControl");
	scriptCtl.Language = "VBScript";
	return scriptCtl.Eval(VBS_CODE);
}
