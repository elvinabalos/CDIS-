/// <reference types="cypress" />

export function navigate() {
    cy.visit('')
}

export function inputUsername(username) {
    cy.get('.input-group > .form-control')
      .type(`${username}`)
}

export function inputPassword(password) {
    validateCheckbox()
    cy.get('.password-input > .form-control')
      .type(`${password}`, {force: true})
}

export function validateCheckbox() {
    cy.get('.password-input-addon')
      .should('not.be.checked')
}

export function clickLoginButton() {
  cy.get('.btn').should('have.text', 'Login').click()
}

export function clickLogout() {
  cy.get('[title="User Menu"]').click({force:true}).contains('bonfire-administrator')
  cy.location('href').should('eq', `${Cypress.config().baseUrl}control-panel`)
  cy.contains('Logout').click({force: true})
  cy.contains('Ok').click()
  cy.location('href').should('eq', `${Cypress.config().baseUrl}`)
}