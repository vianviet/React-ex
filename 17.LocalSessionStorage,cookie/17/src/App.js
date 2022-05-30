import "./App.css";

function App() {
  return (
    <div className="App">
      {localStorage.setItem("test", "Hello")}
      {console.log(localStorage.getItem("test"))}
      {localStorage.removeItem("test")}
      {console.log(localStorage.getItem("test"))}
      {localStorage.setItem("tast", "Helle")}
      {console.log(localStorage.getItem("tast"))}
      {localStorage.clear()}
      {console.log(localStorage.getItem("tast"))}
    </div>
  );
}

export default App;
