import React from "react";
import "./style.css";
const Error = ({ errorMessage }) => {
  return <div className="error-message">{errorMessage}</div>;
};

export default Error;
