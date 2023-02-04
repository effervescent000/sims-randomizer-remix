describe("tests relating to re-rolling sims", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(500);
  });
  it("should never return a -1 or null trait", () => {
    cy.selectPartialTraits("roll-sim-1");
    cy.get(`[data-cy="roll-btn"]`).click();
    const output = cy.get(`[data-cy="roll-out.trait"] option:selected`);
    output.each((el) => cy.wrap(el).should("not.have.value", "-1"));
  });
});
