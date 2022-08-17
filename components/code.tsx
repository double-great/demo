import React, { useEffect, useRef, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { EditorView } from "@codemirror/view";

const Code = ({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (value: string) => void;
}) => {
  const codeEditor = useRef(null);

  useEffect(() => {
    if (codeEditor.current) {
      handleChange(value);
    }
  }, [value]);

  const onChange = useCallback((value: string) => handleChange(value), []);

  return (
    <CodeMirror
      ref={codeEditor}
      value={value}
      extensions={[
        markdown({ base: markdownLanguage }),
        EditorView.lineWrapping,
      ]}
      onChange={onChange}
      minHeight="350px"
      theme={dracula}
    />
  );
};

export default Code;
