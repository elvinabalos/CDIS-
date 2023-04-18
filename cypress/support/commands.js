// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => { 
    cy.session([username, password], () => {
        cy.visit('')
        cy.get('.input-group > .form-control')
                .type(`${username}`)    
        cy.get('.password-input > .form-control')
                .type(`${password}`, {force: true})       
        cy.get('.btn').should('have.text', 'Login').click()    
    }, 
    {
        cacheAcrossSpecs: true
    }
    )
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })