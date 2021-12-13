describe("User can see list of cv", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();

  });

  it("displays the first cv", () => {
    cy.get("#cv-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Lovalot AB");
      cy.get(".description").should("contain", "Digital Marketing and Art assistant");
    });
  });


  it("displays the second cv", () => {
    cy.get("#cv-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Dreamify");
      cy.get(".description").should("contain", "Digital Marketing Intern");
    });
  });

  it("displays the third cv", () => {
    cy.get("#cv-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Cafe Koya");
      cy.get(".description").should("contain", "Online Marketing");
    });
  });
});