let code = '100'
let bank_name = 'New Bank 1'
let description = 'Description 1'
let save_btn = '.row-add'
let module_name = 'Bank File'
let clearBtn = '.datatable-row--add > :nth-child(7)'
let editButton = '[rowindex="0"] > :nth-child(6)'
let delete_icon = '[rowindex="0"] > :nth-child(7)'
let statusField = ':nth-child(5) > .form-control'
let inactiveStatus = 1
let codeField = '.datatable-row--add > :nth-child(2) > .datatable-cell-content > .form-control'
let bankField = '.datatable-row--add > :nth-child(3) > .datatable-cell-content > .form-control'
let descField = '.datatable-row--add > :nth-child(4) > .datatable-cell-content > .form-control'

export class bankFile {

	selectStatus() {
		cy.get(':nth-child(5) > .form-control').select(1)
	}

	validateClearFields() {
		cy.inputField(bankField, bank_name)
		cy.inputField(descField, description)
		// Clear button
		cy.get(clearBtn, { force: true }).click()
		cy.get(codeField)
			.should('be.empty')
		cy.get(bankField)
			.should('be.empty')
		cy.get(descField)
			.should('be.empty')
	}

	validateDuplicates() {
		// Validation for duplications
		cy.inputField(bankField, bank_name)
		cy.inputField(descField, description)
		// Save button  
		cy.get(`${save_btn}`).click()
		cy.get('.datatable-row--add > :nth-child(3) > .datatable-cell-content > .error-message')
			.should('have.text', 'Bank Name has already been taken.')
		cy.get('.datatable-row--add > :nth-child(4) > .datatable-cell-content > .error-message')
			.should('have.text', 'Description has already been taken.')
	}

	validateRequired() {
		cy.reload()
		cy.get(`${save_btn}`).click()
		cy.get('.datatable-row--add > :nth-child(2) > .datatable-cell-content > .error-message')
			.should('have.text', 'Code is required.')
		cy.get('.datatable-row--add > :nth-child(3) > .datatable-cell-content > .error-message')
			.should('have.text', 'Bank Name is required.')
		cy.get('.datatable-row--add > :nth-child(4) > .datatable-cell-content > .error-message')
			.should('have.text', 'Description is required.')
	}

	addBankFile() {
		cy.inputField(descField, description)
		cy.selectStatus(statusField, inactiveStatus)
		cy.inputField(bankField, bank_name)
		cy.save(save_btn, module_name)
	}

  searchKeyword() {
    cy.search(bank_name)
  }

  updateBankFile() {
		cy.get(editButton)
		  .click()
	  	cy.get(descField)
		  .type('Update Description', {force: true})
		cy.get(editButton)
			.click()
		cy.get('.dialog-box-container')
		  .should('contain', `${module_name} successfully updated.`)
		  .contains('Ok')
		  .click()  
	}

	deleteBankFile() {
		this.searchKeyword()
		cy.delete(delete_icon, module_name)
	}
}