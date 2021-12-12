describe('User can see list of projects', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-teb").click()
  })

  it('displays the frist project', () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist")
      cy.get(".header").should("contain", "My First Website");
      cy.get(".description").should("contain", "This was my frist project");
    })
  });

  it("displays the second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "FizzBuzz");
      cy.get(".description").should("contain", "making ruyb application feel's not bad.");
    });
  });

  it("displays the third project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Library challenge");
      cy.get(".description").should("contain", "not bad");
    });
  });
});