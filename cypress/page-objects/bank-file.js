export class bankFile {

	inputCode(code) {
		cy.get('.datatable-row--add > :nth-child(2) > .datatable-cell-content > .form-control',{force: true}).type(`${code}`)
	}

	inputBankName(bankname) {
		cy.get('.datatable-row--add > :nth-child(3) > .datatable-cell-content > .form-control').type(`${bankname}`)
	}

	inputDescription(description) {
		cy.get('.datatable-row--add > :nth-child(4) > .datatable-cell-content > .form-control').type(`${description}`)
	}

	selectStatus() {
		cy.get(':nth-child(5) > .form-control').select(1)
	}

	fillBankFile(code, bankname, description) {
		this.inputCode(`${code}`)
		this.inputBankName(bankname)
		this.inputDescription(description)
		this.selectStatus()
	}

	validateDuplicates(bank_name, description, save_btn) {
		// Validation for duplications
		this.inputBankName(bank_name)
		this.inputDescription(description)
		// Save button  
		cy.get(`${save_btn}`).click()
		cy.get('.datatable-row--add > :nth-child(3) > .datatable-cell-content > .error-message')
		.should('have.text', 'Bank Name has already been taken.')
		cy.get('.datatable-row--add > :nth-child(4) > .datatable-cell-content > .error-message')
		.should('have.text', 'Description has already been taken.')
	}

	validateRequired(save_btn) {
		cy.reload()
		cy.get(`${save_btn}`).click()
		cy.get('.datatable-row--add > :nth-child(2) > .datatable-cell-content > .error-message')
		  .should('have.text', 'Code is required.')
		cy.get('.datatable-row--add > :nth-child(3) > .datatable-cell-content > .error-message')
	      .should('have.text', 'Bank Name is required.')
		cy.get('.datatable-row--add > :nth-child(4) > .datatable-cell-content > .error-message')
	      .should('have.text', 'Description is required.')  
	}
}