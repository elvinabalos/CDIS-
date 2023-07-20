/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

Cypress.Commands.add('login', (username, password) => { 
    cy.session([username, password], () => {
        cy.visit('')
        cy.get('.input-group > .form-control')
                .type(`${username}`, {force: true})    
        cy.get('.password-input > .form-control')
                .type(`${password}`, {force: true})       
        cy.get('.btn').should('have.text', 'Login').click()
        cy.location('pathname', {defaultCommandTimeout: 5000})
          .should('eq','/control-panel')       
    }, 
    {
        cacheAcrossSpecs: true
    }
    )
})

Cypress.Commands.add('save', (save_btn, module_name) => { 
  // Save button
	cy.get(`${save_btn}`).click()
	cy.get('.dialog-box-message__sub-text > span')
	  .should('contain', `${module_name} successfully added.`)
	cy.get('.dialog-box-footer > .button', {force: true})
    .click()  
})

Cypress.Commands.add('search', (name) => {
  // Search
  cy.get('.top > :nth-child(1) > .dropdown-button').click()
	cy.get(':nth-child(1) > :nth-child(2) > .form-control').clear().type(`${name}`)
	cy.get('.d-flex > .btn').click()
})

Cypress.Commands.add('delete', (delete_icon, module_name)=> {
  // Delete
  cy.get(delete_icon).click()
	cy.get('.dialog-box-container')
	  .should('contain', 'Once deleted, you will not be able to recover this data again!')
	  .contains('Ok')  
	  .click()
	cy.get('.dialog-box-container')
	  .should('contain', `${module_name} successfully deleted.`)
	  .contains('Ok')
	  .click()   
})

Cypress.Commands.add('update', (module_name) => {
  // Update
  cy.get('[rowindex="0"] > :nth-child(6)')
    .click()
  cy.get('[rowindex="0"] > :nth-child(4) > .datatable-cell-content > .form-control')
    .type('Update Description', {force: true})
  cy.get('[rowindex="0"] > :nth-child(6)')
    .click()
  cy.get('.dialog-box-container')
    .should('contain', `${module_name} successfully updated.`)
    .contains('Ok')
    .click()  
})

Cypress.Commands.add('inputField', (selector, value) => {
  // Input Field
  cy.get(selector, {force: true})
    .type(value)
})

Cypress.Commands.add('selectStatus', (selector, value) => {
  cy.get(selector).select(value)  
})

Cypress.Commands.add('validateEmptyResult', (selector, msg) => {
  cy.contains(selector, msg)
})

Cypress.Commands.add('selectData', (selector, name) => {
  cy.get(selector).click()
  cy.get(name).click()
})