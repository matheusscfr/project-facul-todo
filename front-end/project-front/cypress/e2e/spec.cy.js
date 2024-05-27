describe('Insert User', () => {
  it('Inserindo Usuario', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[name="nome"]').type('teste')
    cy.get('input[name="email"]').type('cypress@gmail.com')
    cy.get('input[name="fone"]').type('8199791434')
    cy.get('button[type="submit"]').click()

  })

  it('Vendo se o usuario foi inserido', () => {
    cy.visit('http://localhost:5173/')
    cy.get('td').contains('teste')
    cy.get('td').contains('cypress@gmail.com')
    cy.get('td').contains('8199791434')     
  })
})

describe('Editando Usuario', () => {
  it('Usuario sendo editado', () => {
    cy.visit('http://localhost:5173/')
    cy.get('table tbody tr:first').find('td:nth-child(4)').click()
    cy.get('input[name="email"]').clear()
    cy.get('input[name="email"]').type('alterei@cypress.com')
    cy.get('button[type="submit"]').click()

  })
})

describe('Deletando Usuario', () => {
  it('Usuario sendo editado', () => {
    cy.visit('http://localhost:5173/')
    cy.get('table tbody tr:first').find('td:nth-child(5)').click()
  

  })
})



















Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});





