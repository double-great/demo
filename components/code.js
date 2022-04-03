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
        value={`# Double Great playground

remark-lint-link-text warns against non-descriptive link text.
Examples: 
[click here](https://double-great.dev)
[here](https://double-great.dev)

remark-lint-alt-text warns against unhelpful or missing image alt text. 
Examples: 
![](business-chart.png)
![A screenshot of a business chart.](business-chart.png)

*Copy and paste your markdown here to test each plugin.*

`}
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
