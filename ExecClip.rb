#ruby -Ks
s = Editor.GetLineStr(1)
s.chomp!
s += " \"$F\"";
Editor.InsText s
#Editor.InsText(s)
#Editor.ExecCommand(Editor.GetLineStr(1) + " \"$F\"", 0x01)
