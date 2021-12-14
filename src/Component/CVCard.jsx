import React from "react";
import { Card, Image } from "semantic-ui-react";

const CVCard = ({ cv }) => {
  return (
    <Card>
      <Image src={cv.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{cv.name}</Card.Header>
        <Card.Description>{cv.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CVCard;
