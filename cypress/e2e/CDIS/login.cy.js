/// <reference types="cypress" />

describe('The user should be able to login', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('should be able to login successfully', () => {
    // username
    cy.get('.input-group > .form-control').type('superadmin')

    // password
    cy.get('.password-input > .form-control').click()
    cy.get('.password-input > .form-control').type('superadmin031819')

    // Login button
    cy.contains('Login').click()
  })

})
