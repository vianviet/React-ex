import { useContext } from "react";
import "./App.css";
import Content from "./component/Content";
import { ColorContext } from "./context/Provider";

function App() {
  const context = useContext(ColorContext);
  return (
    <>
      <button onClick={context.changeColor}>ChangeColor</button>
      <Content />
    </>
  );
}

export default App;
