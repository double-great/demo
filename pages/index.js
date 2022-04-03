import React, { useState } from "react";
import { remark } from "remark";
import linkText from "@double-great/remark-lint-link-text";
import altText from "@double-great/remark-lint-alt-text";
import { reporter } from "vfile-reporter";
import dynamic from "next/dynamic";
import Head from "next/head";
const CodeWithCodemirror = dynamic(import("../components/code"), {
  ssr: false,
});

const Playground = () => {
  const [errors, setErrors] = useState();

  function handleChange(value) {
    const file = remark().use(linkText).use(altText).processSync(value);
    setErrors(reporter(file));
  }

  return (
    <>
      <Head>
        <title>Playground | Double Great</title>
      </Head>
      <div className="grid-container">
        <div className="grid-left">
          <div className="grid-control-wrapper">
            <div className="grid-control">
              <CodeWithCodemirror handleChange={handleChange} />
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

export default Playground;
