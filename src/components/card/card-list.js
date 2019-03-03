import { ListGroupItem, ListGroup } from "reactstrap";
import React from "react";

export const CardList = props => {
  console.log(props);
  return (
    <ListGroup>
      {props.list.items.map(item => {
        return (
          <ListGroupItem key={item.id} tag="a" href="#" action>
            {item.first_name}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};
