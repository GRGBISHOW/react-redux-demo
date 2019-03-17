import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "../../actions/user-data";
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
    this.props.fetchUserData();
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
    fetchUserData: () => dispatch(fetchUserData())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
