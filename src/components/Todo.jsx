import React from "react";
import todo from "./styles/todo.css";

const Todo = props => {
  const textStyle = {
    textDecoration: props.todo.complete && "line-through",
    color: props.todo.complete && "grey"
  };
  return (
    <div className="box">
      <span className="round">
        <input
          type="checkbox"
          id={props.todo.id}
          onClick={() => props.check(props.todo.id)}
        />
        <label for={props.todo.id}></label>
      </span>
      <span className="item" style={textStyle}>
        {props.todo.title}
      </span>
      <span className="icon" onClick={() => props.delete(props.todo.id)}>
        <i className="fas fa-trash-alt"></i>
      </span>
    </div>
  );
};
export default Todo;
//<i className="fas fa-trash-alt"></i>
