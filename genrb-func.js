s = InputBox("V‹KŠÖ”–¼‚ğ“ü—Í‚µ‚Ä‚­‚¾‚³‚¢B");
Editor.ExecCommand("ruby Z:\\myruby\\genrb.rb -func " + s, 0x01);
Editor.FileOpen("Z:\\myruby\\"+s+".rb");

// Javascript ”Å InputBox
function InputBox( msg ){
	var VBS_CODE = 'inputbox("' + msg + '")';
	var scriptCtl = new ActiveXObject("ScriptControl");
	scriptCtl.Language = "VBScript";
	return scriptCtl.Eval(VBS_CODE);
}
