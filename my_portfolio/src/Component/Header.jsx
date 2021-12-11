import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
          id="header"
          name="My Portfolio"
          as={Link}
          to={{ pathname: "/" }}
        />
        <Menu.Item
          id="about-tab"
          name="About Me"
          as={NavLink}
          to={{ pathname: "/about" }}
        />
        <Menu.Item
          id="projects-tab"
          name="my Projects"
          as={NavLink}
          to={{ pathname: "/projects" }}
        />
      </Menu>
    </Segment>
  );
};

export default Header;
