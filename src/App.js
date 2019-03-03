import React, { Component } from "react";
import "./App.css";
import TodoContainer from "./containers/todo-container/todo-container";
import UserList from "./containers/user-container/user-container";
import { Container, Row } from "reactstrap";
class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <TodoContainer />
          <UserList />
        </Row>
      </Container>
    );
  }
}

export default App;
