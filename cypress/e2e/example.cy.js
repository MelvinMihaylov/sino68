describe('Catalog', () => {
  it('filters the catalog by category and opens a matching product modal', () => {
    cy.visit('/')

    cy.contains('h2', 'Каталог', { timeout: 10000 }).should('be.visible')
    cy.contains('button', 'Огради').click()

    cy.contains('Показани').should('contain', 'Огради')
    cy.get('article').should('have.length.at.least', 1)
    cy.get('article').first().should('contain', 'Огради')
    cy.get('article').last().should('contain', 'Огради')

    cy.get('article').first().click({ force: true })

    cy.get('[role="dialog"]').should('be.visible')
    cy.window().its('document.body.style.overflow').should('eq', 'hidden')
    cy.get('#category').should('contain', 'Огради')
    cy.get('#modal-title')
      .invoke('text')
      .then((initialTitle) => {
        cy.get('button[aria-label="Следващ проект"]:visible').click()
        cy.get('#modal-title').should('not.have.text', initialTitle)
        cy.get('button[aria-label="Предишен проект"]:visible').click()
        cy.get('#modal-title').should('have.text', initialTitle)
      })
  })
})
