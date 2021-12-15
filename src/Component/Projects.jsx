import React from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import { Component } from "react";
import { Container, Grid } from "semantic-ui-react";

class Projects extends Component {
  state = {
    projects: [],
  };

  render() {
    const { projects } = this.state;

    let projectsList = projects.map((project) => {
      return (
        <div id={`project-${project.id}`} key={project.id}>
          <ProjectCard project={project} />
        </div>
      );
    });

    return (
      <Container>
        <h4 id="projects-header">My Projects</h4>
        <Grid>{projectsList}</Grid>
      </Container>
    );
  }

  componentDidMount() {
    axios.get("./data/projects.json").then((response) => {
      this.setState({ projects: response.data });
    });
  }
}

export default Projects;
