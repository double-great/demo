import React, { useState, useEffect } from "react";
import { remark } from "remark";
import linkText from "@double-great/remark-lint-link-text";
import altText from "@double-great/remark-lint-alt-text";
import { reporter } from "vfile-reporter";
import dynamic from "next/dynamic";
import Head from "next/head";
const CodeWithCodemirror = dynamic(import("../components/code"), {
  ssr: false,
});

const Demo = () => {
  const [value, setValue] = useState(`# Demo

Try out Double great plugins:

[click here](https://double-great.dev)!

![](business-chart.png)`);
  const [errors, setErrors] = useState();

  useEffect(() => {
    processProse(value);
  }, []);

  function handleChange(value) {
    setValue(value.getValue());
    processProse(value.getValue());
  }

  function processProse(value) {
    const errors = linkTextChecker(value);
    setErrors(errors);
  }

  function linkTextChecker(value) {
    const file = remark().use(linkText).use(altText).processSync(value);
    return reporter(file);
  }

  return (
    <>
      <Head>
        <title>Demos | Double Great</title>
      </Head>
      <div className="grid-container">
        <div className="grid-left">
          <div className="grid-control-wrapper">
            <div className="grid-control">
              <CodeWithCodemirror handleChange={handleChange} value={value} />
            </div>
          </div>
        </div>

        <div className="grid-right">
          <div className="error-wrapper">
            {errors ? <pre>{errors}</pre> : `no issues found`}
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
