import React from "react";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const SubmitButton = (props) => {
  return (
    <div>
      <div className="btn-group">
        <Button type="submit" onClick={props.onClick} className="primary">
          {props.name}
        </Button>
      </div>
    </div>
  );
};

export default SubmitButton;
