import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        <table
          style={{ border: "1px solid black", borderCollapse: "collapse" }}
        >
          <tbody>
            {todoList.map((task) => {
              return(
              <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>);
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
