import "./App.css";
import CompletedList from "./component/CompletedList";
import InProgressList from "./component/InProgressList";
import NewActionInput from "./component/NewActionInput";
import NewList from "./component/NewList";

function App() {
  return (
    <div className="App">
      <h1>Put todo list</h1>
      <NewActionInput />
      <div className="content">
        <NewList />
        <InProgressList />
        <CompletedList />
      </div>
    </div>
  );
}
export default App;
