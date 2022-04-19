import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTodo } from "../action";

class Todo extends Component {
  handleRemove = (event) => {
    event.preventDefault();
    let todo = this.props.todo;
    this.props.onRemove(todo);
  };
  render() {
    return (
      <li>
        {this.props.todo}
        <button onClick={this.handleRemove}>x</button>
      </li>
    );
  }
}
var mapDispatchToProps = (dispatch, props) => {
  return {
    onRemove: (todo) => {
      dispatch(removeTodo(todo));
    },
  };
};

export default connect(null, mapDispatchToProps)(Todo);
