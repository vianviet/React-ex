import React, { useContext } from "react";
import { ColorContext } from "../context/Provider";

const Text = () => {
  const context = useContext(ColorContext);
  console.log(context.color);
  return <h3 className={context.color}>Hello</h3>;
};

export default Text;
