/// <reference types="cypress" />

describe('The user should be able to login and logout successfully', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('should be able to input username and password to login and logout', () => {
    // username
    cy.get('.input-group > .form-control').type('superadmin')

    // password
    cy.get('.password-input > .form-control').click()
    cy.get('.password-input-addon').should('not.be.checked')
    cy.get('.password-input > .form-control').type('superadmin031819{enter}', {force: true})

    // user menu
    cy.get('[title="User Menu"]').click().contains('bonfire-administrator')
    cy.location('href').should('eq', 'http://localhost/control-panel')
    cy.contains('Logout').click()
    cy.contains('Ok').click()
    cy.location('href').should('eq', 'http://localhost/')
  })
})