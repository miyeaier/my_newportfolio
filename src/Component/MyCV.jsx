import React from "react";
import axios from "axios";
import CVCard from "./CVCard";
import { Component } from "react";
import { Container, Grid, List } from "semantic-ui-react";

class CV extends Component {
  state = {
    cv: [],
  };

  render() {
    const { cv } = this.state;

    let cvList = cv.map((cv) => {
      return (
        <div id={`cv-${cv.id}`} key={cv.id}>
          <CVCard cv={cv} />
        </div>
      );
    });

    return (
      <Container>
        <h1 id="cv-header">My CV</h1>
        <Grid>{cvList} </Grid>
      </Container>
    );
  }

  componentDidMount() {
    axios.get("./data/cv.json").then((response) => {
      this.setState({ cv: response.data });
    });
  }
}

export default CV;
