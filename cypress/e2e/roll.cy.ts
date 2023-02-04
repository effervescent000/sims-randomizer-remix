describe("tests relating to re-rolling sims", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });
  it("should never return a -1 or null trait", () => {
    cy.selectPartialTraits("roll-sim-1");
    cy.get(`[data-cy="roll-btn"]`).click();
    const output = cy.get(`[data-cy="roll-out.trait"]`);
    output.should("have.length", 3);
    output.should("not.include.value", "-1");
  });
});
