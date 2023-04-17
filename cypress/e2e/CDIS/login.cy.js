/// <reference types="cypress" />

describe('The user should be able to login', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('should be able to login & logout successfully', () => {
    // username
    cy.get('.input-group > .form-control').type('superadmin')

    // password
    cy.get('.password-input > .form-control').click()
    cy.get('.password-input > .form-control').type('superadmin031819{enter}')
    cy.get('.password-input-addon').should('not.be.checked')

    // user menu
    cy.get('[title="User Menu"]').click().contains('bonfire-administrator')
    cy.contains('Logout').click()
    cy.contains('Ok').click()
  })
})