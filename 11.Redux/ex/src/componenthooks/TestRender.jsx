import React from "react";
import { useSelector } from "react-redux";

export default function TestRender() {
  const test = useSelector((state) => state.test);
  console.log(test);
  return <div>{test}</div>;
}
