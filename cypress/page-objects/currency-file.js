let code = '100'
let currency = 'New Currency 1'
let description = 'Description 1'
let save_btn = '.row-add'
let delete_icon = '[rowindex="0"] > :nth-child(7)'
let clearBtn = '.datatable-row--add > :nth-child(7)'
let module_name = 'Currency File'
let codeField = '.datatable-row--add > :nth-child(2) > .datatable-cell-content > .form-control'
let currencyField = '.datatable-row--add > :nth-child(3) > .datatable-cell-content > .form-control'
let descriptionField = '.datatable-row--add > :nth-child(4) > .datatable-cell-content > .form-control'
let statusField = ':nth-child(5) > .form-control'
let inactiveStatus = 1
let activeStatus = 0
let emptyResultModal = '.no-data-available--inline > td'
let noDataAvailableToShow = 'No data available to show'

export class currencyFile {
	addCurrencyFile() {
		// code
		cy.inputField(codeField, code)
		// currency
		cy.inputField(currencyField, currency)
		// description
		cy.inputField(descriptionField, description)
		// status
		cy.selectStatus(statusField, inactiveStatus)
		cy.save(save_btn, module_name)
	}

	searchCurrency() {
		cy.search(currency)
	}

	updateCurrency() {
		cy.update(module_name)
	}

	deleteCurrency() {
		this.searchCurrency()
		cy.delete(delete_icon, module_name)
	}

	checkEmptyResult() {
		cy.validateEmptyResult(emptyResultModal, noDataAvailableToShow)
	}

	validateClearFields() {
		cy.inputField(codeField, code)
		cy.inputField(currencyField, currency)
		cy.inputField(descriptionField, description)
		cy.get(clearBtn, {force: true}).click()
		cy.get(codeField)
		  .should('be.empty')
		cy.get(currencyField)
		  .should('be.empty')
		cy.get(descriptionField)
		  .should('be.empty')
	}

	validateDuplicates() {
		// Validation for duplications
		cy.inputField(currencyField, currency)
		cy.inputField(descriptionField, description)
		// Save button
		cy.get(`${save_btn}`).click()
		cy.get('.datatable-row--add > :nth-child(3) > .datatable-cell-content > .error-message')
			.should('have.text', `Currency has already been taken.`)
		cy.get('.datatable-row--add > :nth-child(4) > .datatable-cell-content > .error-message')
			.should('have.text', 'Description has already been taken.')
	}

	validateRequired() {
		cy.reload()
		cy.get(`${save_btn}`).click()
		cy.get('.datatable-row--add > :nth-child(2) > .datatable-cell-content > .error-message')
		  .should('have.text', 'Code is required.')
		cy.get('.datatable-row--add > :nth-child(3) > .datatable-cell-content > .error-message')
	      .should('have.text', 'Currency is required.')
		cy.get('.datatable-row--add > :nth-child(4) > .datatable-cell-content > .error-message')
	      .should('have.text', 'Description is required.')
	}
}