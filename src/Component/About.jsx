import React from "react";
import { Container, Image } from "semantic-ui-react";
const About = () => {
  return (
    <Container>
      <p4 className="GeeksForGeeks">
      <h1 className="ui header">About Me</h1>

      <Image
        src="https://github.com/miyeaier/my_newportfolio/blob/main/Img/Cv.jpg?raw=true"
        as="a"
        size="medium"
        href="https://www.linkedin.com/in/miyesier-kaerman-257494136/"
        target="_blank"
      />
      </p4>
    </Container>
  );
};

export default About;
