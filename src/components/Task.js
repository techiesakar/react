import React from "react";
const myStyles = {
  td: {
    border: "1px solid black",
    padding: "16px"
  },
  button: {
    cursor : "pointer"
  }
};
const Task = (props) => {
  return (
    <tr key={props.id}>
      {console.log(`Props ID is ${props.id}`)}
      <td style={myStyles.td}>
        <span>{props.taskName}</span>
      </td>
      <td style={myStyles.td}>
        <button
          onClick={() => props.deleteTask(props.id)}
          style={{ cursor: "pointer" }}
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default Task;
