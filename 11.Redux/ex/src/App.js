import "./App.css";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      TodoList
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
