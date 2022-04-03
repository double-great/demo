/* eslint-disable react/prop-types */
import React from "react";
import "../css/theme.css";
import "../css/playground.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default MyApp;
