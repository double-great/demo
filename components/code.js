/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, useRef } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/markdown/markdown";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

export default (props) => {
  const codeEditor = useRef(null);

  useEffect(() => {
    if (codeEditor.current && codeEditor.current) {
      props.handleChange(codeEditor.current.props.value);
    }
  }, []);

  return (
    <>
      <CodeMirror
        ref={codeEditor}
        value={`# Demo

Try out Double great plugins:

[click here](https://double-great.dev)!

![](business-chart.png)`}
        options={{
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
          mode: "markdown",
        }}
        onChange={(editor) => props.handleChange(editor.getValue())}
      />
    </>
  );
};
