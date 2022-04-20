import "./App.css";
// import AddTodo from "./componenthooks/AddTodo";
import AddTodoReducer from "./componenthooks/AddTodoReducer";
// import TodoList from "./componenthooks/TodoList";

function App() {
  return (
    <div className="App">
      TodoList Redux with Hooks
      <AddTodoReducer />
      {/* <AddTodo/> */}
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
