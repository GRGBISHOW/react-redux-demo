import { ListGroup, ListGroupItem } from "reactstrap";
import React from "react";

export const List = props => {
  return (
    <ListGroup>
      <ListItem list={props.list} />
    </ListGroup>
  );
};

const ListItem = props => {
  console.log(props);
  return props.list.items.map((item, index) => {
    return (
      <ListGroupItem key={index} tag="a" href="#" action>
        {item.title}
      </ListGroupItem>
    );
  });
};
