import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
const myStyles = {
  table: {
    fontFamily: "Poppins",
  },
};

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

  const handleKeyDown = (event) => {
    console.log("User pressed: ", event.key);

    // console.log(message);

    if (event.key === "Enter") {
      // 👇️ your logic here
      addTask();
    }
  };

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        <table style={myStyles.table}>
          <tbody>
            {todoList.map((task) => {
              return (
                <Task
                  taskName={task.taskName}
                  id={task.id}
                  key={task.id}
                  deleteTask={deleteTask}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
