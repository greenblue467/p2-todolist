import React from "react";
import todo from "./styles/todo.css";

const AddTodo = props => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <input
          type="text"
          placeholder="新增待辦事項..."
          className="input"
          value={props.item}
          onChange={props.addTask}
          required
        ></input>
        <input type="submit" value="+" className="btn"></input>
      </form>
    </div>
  );
};
export default AddTodo;
