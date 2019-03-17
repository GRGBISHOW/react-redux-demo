import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "../../actions/user-data";
import { CardList } from "../../components/card/card-list";

import { Col, Spinner, Row, Button } from "reactstrap";

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
      <Col className="ml-5" xs="3">
        <h1>Async Call</h1>
        <Button
          color="primary"
          className="float-right ml-2"
          onClick={this.props.fetchUserData}
        >
          Reload
        </Button>
        {this.props.isLoading ? (
          <Spinner type="grow" color="primary" />
        ) : (
          <CardList list={this.props.userList} />
        )}
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
