import React from "react";

const CustomLabel = ({ name, child }) => {
  return <label className={name !== "" ? "shrink" : ""}>{child}</label>;
};

export default CustomLabel;
