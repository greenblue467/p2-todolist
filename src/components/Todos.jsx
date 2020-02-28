import React from "react";
import todo from "./styles/todo.css";
import Todo from "./Todo";

const Todos = props => {
  return (
    <div className="todo_list">
      {props.todo.map(x => (
        <Todo
          key={x.id}
          todo={x}
          check={() => props.check(x.id)}
          delete={() => props.delete(x.id)}
        />
      ))}
    </div>
  );
};
export default Todos;
