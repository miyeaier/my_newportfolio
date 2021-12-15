import React from "react";
import { Container,Image } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <h1 id="about-header">About Me</h1>
      <Image
    src='/images/wireframe/image-text.png'
    as='a'
    size='medium'
    href='http://google.com'
    target='_blank'
  />

    </Container>
  );
};

export default About;
