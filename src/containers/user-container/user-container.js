import React, { Component } from "react";
import { connect } from "react-redux";
import {
  initRequest,
  recieveResponse,
  parseError
} from "../../actions/user-data";
import { CardList } from "../../components/card/card-list";

import { Col } from "reactstrap";

class UserList extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.props.initRequest();
    fetch("https://reqres.in/api/users?page=2")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(r => this.props.recieveResponse(r.data))
      .catch(er => this.props.parseError(true));
  }

  render() {
    return (
      <Col xs="3">
        <h1>Async Call</h1>
        <CardList list={this.props.userList} />
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    userList: state.userList,
    isLoading: state.userList.isLoading,
    isCompleted: state.userList.isCompleted,
    error: state.userList.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initRequest: () => dispatch(initRequest()),
    recieveResponse: userList => dispatch(recieveResponse(userList)),
    parseError: error => dispatch(parseError(error))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
