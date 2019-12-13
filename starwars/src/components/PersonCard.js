import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const PersonCard = props => {
  const { name, born, height, hairColor, planet } = props;
  return (
    <div>
      <Card style={{ backgroundColor: "#DDDCE5" }} className="mt-4">
        <CardBody>
          <CardTitle className="display-5 font-weight-bold">{name}</CardTitle>
          <CardSubtitle>Born: {born}</CardSubtitle>
          <CardText className="m-0">Height: {height}cm</CardText>
          <CardText>Hair Color: {hairColor}</CardText>
          <Button
            // style={{ backgroundColor: "#74686C" }}
            onClick={() => window.open(planet)}
            className="button w-75"
          >
            View Planet Data
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default PersonCard;