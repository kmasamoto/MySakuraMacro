s = InputBox("�V�K�N���X������͂��Ă��������B");
Editor.ExecCommand("ruby Z:\\myruby\\genrb.rb " + s, 0x01);
Editor.FileOpen("Z:\\myruby\\"+s+".rb");

// Javascript �� InputBox
function InputBox( msg ){
	var VBS_CODE = 'inputbox("' + msg + '")';
	var scriptCtl = new ActiveXObject("ScriptControl");
	scriptCtl.Language = "VBScript";
	return scriptCtl.Eval(VBS_CODE);
}
