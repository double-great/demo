/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, useRef } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/markdown/markdown";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";

export default ({ handleChange }) => {
  const codeEditor = useRef(null);

  useEffect(() => {
    if (codeEditor.current && codeEditor.current) {
      handleChange(codeEditor.current.props.value);
    }
  }, []);

  return (
    <>
      <CodeMirror
        ref={codeEditor}
        value={`# Double Great playground

*Copy and paste your markdown here to test each plugin.*

remark-lint-link-text warns against non-descriptive link text. Examples: 
- [click here](https://double-great.dev/)
- [read more](https://double-great.dev/remark-lint-link-text)

remark-lint-alt-text warns against unhelpful or missing image alt text. Example: ![](chart.png)
`}
        options={{
          theme: "dracula",
          lineNumbers: true,
          lineWrapping: true,
          mode: "markdown",
        }}
        onChange={(editor) => handleChange(editor.getValue())}
      />
    </>
  );
};
