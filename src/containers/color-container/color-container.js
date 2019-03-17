import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchColorData } from "../../actions/user-data";
import { List } from "../../components/list/list";
import { Col, Spinner, Row, Button } from "reactstrap";

class ColorList extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.props.fetchColorData();
  }

  render() {
    return (
      <Col className="ml-4">
        <List list={this.props.colorList} />
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    colorList: state.colorList,
    isLoading: state.userList.isLoading,
    isCompleted: state.userList.isCompleted,
    error: state.userList.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchColorData: () => dispatch(fetchColorData())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorList);
