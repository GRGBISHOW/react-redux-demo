import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData, fetchColorData } from "../../actions/user-data";
import { CardList } from "../../components/card/card-list";
import { List } from "../../components/list/list";
import { Col, Spinner, Row, Button } from "reactstrap";

class UserList extends Component {
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.props.fetchUserData();
    this.props.fetchColorData();
  }

  reload = () => {
    this.props.fetchUserData();
    this.props.fetchColorData();
  };

  render() {
    console.log("THis is userlist" + this.props.userList);
    return (
      <Col className="ml-10" xs="4">
        <h1>Async Call</h1>
        <Button
          color="primary"
          className="float-right ml-2"
          onClick={() => this.reload()}
        >
          Reload
        </Button>
        <Row>
          <Col>
            {this.props.userList.isLoading ? (
              <Spinner type="grow" color="primary" />
            ) : (
              <CardList list={this.props.userList} />
            )}
          </Col>
          <Col>
            {this.props.colorList.isLoading ? (
              <Spinner type="grow" color="success" />
            ) : (
              <List list={this.props.colorList} />
            )}
          </Col>
        </Row>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    userList: state.userList,
    colorList: state.colorList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserData: () => dispatch(fetchUserData()),
    fetchColorData: () => dispatch(fetchColorData())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
