describe("My First Test", () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  })

  it('Does not do much!', () => {
    expect(true).to.equal(true);
  })
})

describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('https://example.cypress.io')
    cy.get('.nav').contains('Commands').click();
    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
