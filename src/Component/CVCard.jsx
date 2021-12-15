import React from "react";
import { Card, Image, List } from "semantic-ui-react";

const CVCard = ({ cv }) => {
  return (
    <Card>
      <Image src={cv.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{cv.name}</Card.Header>
        <Card.Description>{cv.description}</Card.Description>
        <List>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>Stockholm</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="mail" />
            <List.Content>
              <a href="miyesier@gmail.com">miyesier@gmail.com</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="linkify" />
            <List.Content>
              <a href="https://www.linkedin.com/in/miyesier-kaerman-257494136/">
                Linkedin
              </a>
            </List.Content>
          </List.Item>
        </List>
      </Card.Content>
    </Card>
  );
};

export default CVCard;
