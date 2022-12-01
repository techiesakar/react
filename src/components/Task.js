import React from "react";

const Task = (props) => {
  return (
    <tr>
      <td style={{ border: "1px solid black", padding: "16px" }}>
        <span>{props.taskName}</span>
      </td>
      <td style={{ border: "1px solid black", padding: "16px" }}>
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
