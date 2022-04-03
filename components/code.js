/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/markdown/markdown";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

export default (props) => (
  <>
    <CodeMirror
      {...props}
      value={props.value}
      options={{
        theme: "material",
        lineNumbers: true,
        lineWrapping: true,
        mode: "markdown",
      }}
      onChange={(value) => props.handleChange(value)}
    />
  </>
);
