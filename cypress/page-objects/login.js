/// <reference types="cypress" />
export class Login {
	navigate() {
		cy.visit('')
	}

	inputUsername(username) {
		cy.get('.input-group > .form-control')
			.type(`${username}`)
	}

	inputPassword(password) {
		this.validateCheckbox()
		cy.get('.password-input > .form-control')
			.type(`${password}`, {force: true})
	}

	validateCheckbox() {
		cy.get('.password-input-addon')
			.should('not.be.checked')
	}

	clickLoginButton() {
		cy.get('.btn').should('have.text', 'Login').click()
	}

	clickLogout() {
		cy.get('[title="User Menu"]', {timeout: 5000}).click({force:true}).contains('bonfire-administrator')
		cy.location('href').should('eq', `${Cypress.config().baseUrl}control-panel`)
		cy.contains('Logout').click({force: true})
		cy.contains('Ok').click()
		cy.location('href').should('eq', `${Cypress.config().baseUrl}`)
	}

	validationErrorMessage() {
		cy.get('.message').should('include.text', 'These credentials do not match our records.')
	}
}