import React from "react";
import { Container } from "semantic-ui-react";

const Hello = () => {
  return (
    <Container>
      <h1 id="hello">Hello World</h1>
    </Container>
  );
};

document.body.style.backgroundImage =
  "url('https://images.unsplash.com/photo-1600196302476-1790ba2334f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')";
export default Hello;
