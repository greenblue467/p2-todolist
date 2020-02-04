import React, { Component } from "react";
import todo from "./styles/todo.css";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

class List extends Component {
  state = {
    todo: [
      {
        id: 1,
        title: "做運動",
        complete: false
      },
      {
        id: 2,
        title: "買菜",
        complete: false
      }
    ],
    newItem: ""
  };
  check = e => {
    const newState = [...this.state.todo];
    const index = newState.findIndex(x => x.id == e);
    newState[index].complete = !newState[index].complete;
    this.setState({ todo: newState });
  };
  delete = e => {
    const newArray = [...this.state.todo];
    const newState = newArray.filter(x => x.id != e);
    this.setState({ todo: newState });
  };
  addTask = e => {
    this.setState({ newItem: e.target.value });
  };
  submit = e => {
    e.preventDefault();
    this.addToList(this.state.newItem);
    this.setState({ newItem: "" });
  };
  addToList = e => {
    const space = this.trims(e);
    if (space == 0) {
      alert("不能輸入空白");
    } else {
      const newItem = {
        id: Date.now(),
        title: e,
        complete: false
      };
      const newState = [...this.state.todo, newItem];
      this.setState({ todo: newState });
    }
  };
  trims = e => {
    return e.replace(/[ ]/g, "");
  };
  reset = () => {
    this.setState({ todo: [] });
  };
  render() {
    return (
      <div className="content">
        <div className="title">My To Do List</div>
        <AddTodo
          todo={this.state.todo}
          item={this.state.newItem}
          addTask={this.addTask}
          submit={this.submit}
        />
        <Todos todo={this.state.todo} check={this.check} delete={this.delete} />
        <button className="rebtn" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default List;
