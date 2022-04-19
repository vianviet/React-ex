import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./../action/index";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "",
    };
  }

  handleChange = (event) => {
    let value = event.target.value;
    this.setState({ txtName: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let todo = this.state.txtName;
    this.props.onSubmit(todo);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="txtName"
          onChange={this.handleChange}
        />
        <button type="submit">Add todo</button>
      </form>
    );
  }
}

var mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: (todo) => {
      dispatch(addTodo(todo));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
