export class LoginPage {
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
      cy.get('[title="User Menu"]').click({force:true}).contains('bonfire-administrator')
      cy.location('href').should('eq', 'http://localhost/control-panel')
      cy.contains('Logout').click({force: true})
      cy.contains('Ok').click()
      cy.location('href').should('eq', 'http://localhost/')
    }
}