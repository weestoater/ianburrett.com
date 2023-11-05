describe("homepage spec", () => {
  it("has a header", () => {
    cy.visit("/");
    cy.get("h1").contains("Welcome");
  });

  it("has a paragraph", () => {
    cy.visit("/");
    cy.get("p").not(null);
  });
});
