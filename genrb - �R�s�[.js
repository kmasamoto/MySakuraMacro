s = InputBox("�V�K�֐�������͂��Ă��������B");
Editor.ExecCommand("ruby Z:\\myruby\\genrb.rb -func " + s, 0x01);
Editor.FileOpen("Z:\\myruby\\"+s+".rb");

// Javascript �� InputBox
function InputBox( msg ){
	var VBS_CODE = 'inputbox("' + msg + '")';
	var scriptCtl = new ActiveXObject("ScriptControl");
	scriptCtl.Language = "VBScript";
	return scriptCtl.Eval(VBS_CODE);
}
