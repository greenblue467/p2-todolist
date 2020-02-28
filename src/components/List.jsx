import React, { Component } from "react";
import todo from "./styles/todo.css";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import $ from "jquery";

class List extends Component {
  state = {
    todo: [
      {
        id: 1,
        title: "倒垃圾",
        complete: true
      },
      {
        id: 2,
        title: "買菜",
        complete: false
      }
    ],
    newItem: ""
  };
  UNSAFE_componentWillMount() {
    const result = localStorage.getItem("name");
    if (result) {
      const show = JSON.parse(result);
      this.setState({ todo: show });
    }
  }
  componentDidMount() {
    const newState = [...this.state.todo];
    const newArray = newState.map(x => {
      if (x.complete) {
        $(`#${x.id}`).prop("checked", true);
      }
      return x;
    });
    this.setState({ todo: newArray });
  }
  check = e => {
    const newState = [...this.state.todo];
    const index = newState.findIndex(x => x.id === e);
    if (newState[index].complete) {
      $(this).prop("checked", true);
    }
    newState[index].complete = !newState[index].complete;
    this.setState({ todo: newState });
  };
  delete = e => {
    const newArray = [...this.state.todo];
    const newState = newArray.filter(x => x.id !== e);
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
    if (space === 0) {
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
  UNSAFE_componentWillUpdate = (nextProps, nextState) => {
    const storage = JSON.stringify(nextState.todo);
    localStorage.setItem("name", storage);
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
