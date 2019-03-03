import { Button, InputGroupAddon, Input, InputGroup } from "reactstrap";

import React from "react";

export const InputForm = props => {
  return (
    <InputGroup>
      <Input
        type="text"
        name="text"
        id="title"
        placeholder="To do title"
        value={props.value}
        onChange={props.onTextChange}
      />
      <InputGroupAddon addonType="append">
        <Button color="primary" onClick={() => props.onBtnClick()}>
          ADD NOW
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};
