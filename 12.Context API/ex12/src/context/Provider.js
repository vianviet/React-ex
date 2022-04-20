import { createContext, useState } from "react";

const ColorContext = createContext();

function Provider({ children }) {
  const [color, setColor] = useState("red");
  const changeColor = () => {
    setColor(color === "red" ? "black" : "red");
  };
  const value = {
    color,
    changeColor,
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
}
export { ColorContext, Provider };
