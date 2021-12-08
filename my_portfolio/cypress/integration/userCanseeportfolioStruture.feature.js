import React from 'react';

describe("Portfolio interface", () => {
  it("successfully renders", () => {
    cy.visit("http://localhost:3000");
    cy.get("#header").should("contain", "My portfolio");
    cy.get("#footer").should("contain", `Made with React ${React.version}`);
    cy.get("#hello").should("contain", "Hello World")
  });
});