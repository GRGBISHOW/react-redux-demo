import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions/index";
import { List } from "../../components/list/list";
import { InputForm } from "../../components/inputForm/inputForm";
import { Row, Col } from "reactstrap";

class TodoContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  addTodoHandler = () => {
    if (this.state.title.trim() === "") {
      return;
    }
    this.props.addTodoToList(this.state.title);
  };

  todoTitleChangeHandler = event => {
    this.setState({
      title: event.target.value
    });
  };
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <Col xs="3">
        <Row>
          <h1>Todo list</h1>
          <InputForm
            onBtnClick={this.addTodoHandler}
            onTextChange={this.todoTitleChangeHandler}
            value={this.state.title}
          />
        </Row>
        <Row className="mt-3">
          <List list={this.props.todoList}> </List>
        </Row>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodoToList: item => dispatch(addTodo(item))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
