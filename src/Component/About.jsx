import React from "react";
import { Container, Image, Header } from "semantic-ui-react";
const About = () => {
  return (
    <Container>
      <Header as="h1" id="about-header">
        About Me
      </Header>
      <Image
        src="https://github.com/miyeaier/my_newportfolio/blob/main/IMG/contact.jpg?raw=true"
        as="a"
        href="https://www.linkedin.com/in/miyesier-kaerman-257494136/"
        target="_blank"
      />
    </Container>
  );
};

export default About;
