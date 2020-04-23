import React from "react";
// add moment
import moment from "moment";

function TodoList(props) {
  console.log("list", props);

  return (
    <div>
      {props.todo.map((item) => (
        <li
          className={`todo${item.done ? " done" : ""}`}
          key={item.id}
          onClick={() => props.toggle(item.id)}>
          {item.name} | added:{" "}
          {moment(item.id).format("MMMM Do YYYY, h:mm:ss a")}
        </li>
      ))}
      {props.todo[0] ? (
        <button className="clear-btn" onClick={props.clear}>
          Clear List
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default TodoList;
