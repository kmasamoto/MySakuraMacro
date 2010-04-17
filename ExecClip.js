var s = Editor.GetLineStr(1) + " \"$F\"";
Editor.InsText(s)
Editor.ExecCommand(Editor.GetLineStr(1) + " \"$F\"", 0x01)
