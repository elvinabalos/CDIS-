let position = 'Position here'
let name = 'name'
let nameField = '.datatable-row--add > :nth-child(5) > .datatable-cell-content > .form-control'
let module_name = 'Cash On Hand'
let positionField = '.datatable-row--add > :nth-child(4) > .datatable-cell-content > .form-control'
let branchField = '.datatable-row--add > :nth-child(3) > .datatable-cell-content > .vm-select > .vm-input > .vm-input__inner'
let currencyField = '.datatable-row--add > :nth-child(6) > .datatable-cell-content > .vm-select > .vm-input > .vm-input__inner'
let currencyData = '[style="min-width: 291px; position: absolute; top: 197px; left: 704px; transform-origin: center top; z-index: 2001;"] > .vm-scrollbar > .vm-select-dropdown__wrap > .vm-scrollbar__view > :nth-child(2)'
let staAnaBranch = 'body > div.vm-select-dropdown > div > div.vm-select-dropdown__wrap.vm-scrollbar__wrap > ul > li:nth-child(2)'
let save_btn = '.row-add'
let clearBtn = '.datatable-row--add > :nth-child(9)'
let editButton = '[rowindex="0"] > :nth-child(6)'
let delete_icon = '[rowindex="0"] > :nth-child(7)'
let statusField = ':nth-child(7) > .form-control'
let inactiveStatus = 1
let codeField = '.datatable-row--add > :nth-child(2) > .datatable-cell-content > .form-control'
let descField = '.datatable-row--add > :nth-child(4) > .datatable-cell-content > .form-control'

export class cashOnHand {

	selectStatus() {
		cy.get(':nth-child(5) > .form-control').select(1)
	}

	validateClearFields() {
		cy.inputField(nameField, name)
		cy.inputField(positionField, position)
		// Clear button
		cy.get(clearBtn, { force: true }).click()
		this.selectBranch()
		this.selectCurrency()
		cy.get(codeField)
			.should('be.empty')
		cy.get(nameField)
			.should('be.empty')
		cy.get(positionField)
			.should('be.empty')
		cy.get(branchField)
			.should('be.empty')	
		cy.get(currencyField)
			.should('be.empty')
	}

	validateDuplicates() {
		// Validation for duplications
		cy.inputField(branc, bank_name)
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

	addCashOnHand() {
		cy.inputField(positionField, position)
		cy.inputField(nameField, name)
		cy.selectStatus(statusField, inactiveStatus)
		this.selectBranch()
		this.selectCurrency()
		cy.save(save_btn, module_name)
	}

	selectBranch() {
		cy.selectData(branchField, staAnaBranch)
	}

	selectCurrency() {
		cy.selectData(currencyField, currencyData)
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