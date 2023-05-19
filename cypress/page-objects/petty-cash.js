let code = '100'
let custodian_name = 'Custodian 1'
let save_btn = '.row-add'
let clearBtn = '.datatable-row--add > :nth-child(7)'
let module_name = 'Petty Cash Custodian'
let codeField = '.datatable-row--add > :nth-child(2) > .datatable-cell-content > .form-control'
let custodianField = '.datatable-row--add > :nth-child(4) > .datatable-cell-content > .form-control'
let statusField = ':nth-child(6) > .form-control'
let inactiveStatus = 1
let activeStatus = 0
let emptyResultModal = '.no-data-available--inline > td'
let noDataAvailableToShow = 'No data available to show'
let branchField = '.datatable-row--add > :nth-child(3) > .datatable-cell-content > .vm-select > .vm-input > .vm-input__inner'
let staAnaBranch = '[style="min-width: 241px; position: absolute; top: 197px; left: 346px; transform-origin: center top; z-index: 2000;"] > .vm-scrollbar > .vm-select-dropdown__wrap > .vm-scrollbar__view > :nth-child(2)'
let currencyField = '.datatable-row--add > :nth-child(5) > .datatable-cell-content > .vm-select > .vm-input > .vm-input__inner'
let currencyData = '[style="min-width: 291px; position: absolute; top: 197px; left: 704px; transform-origin: center top; z-index: 2001;"] > .vm-scrollbar > .vm-select-dropdown__wrap > .vm-scrollbar__view > :nth-child(2)'

export class pettyCash {
	addPettyCash() {
		cy.inputField(custodianField, custodian_name)
		this.selectBranch()
		this.selectCurrency()
		cy.selectStatus(statusField, inactiveStatus)
		cy.save(save_btn, module_name)
	}

	selectBranch() {
		cy.selectData(branchField, staAnaBranch)
	}

	selectCurrency() {
		cy.selectData(currencyField, currencyData)
	}

	searchCurrency() {
		cy.search(currency)
	}

	updateCurrency() {
		cy.update(module_name)
	}

	deleteCurrency() {
		this.searchCurrency()
		cy.delete(module_name)
	}

	checkEmptyResult() {
		cy.validateEmptyResult(emptyResultModal, noDataAvailableToShow)
	}

	validateClearFields() {
		cy.inputField(custodianField, custodian_name)
		this.selectBranch()
		this.selectCurrency()
		cy.get(clearBtn, {force: true}).click()
		cy.get(custodianField)
		  .should('be.empty')
		cy.get(branchField)
		  .should('be.empty')
		cy.get(currencyField)
		  .should('be.empty')
	}

	validateDuplicates() {
		cy.inputField(custodianField, custodian_name)
		this.selectBranch()
		this.selectCurrency()
		cy.get(`${save_btn}`).click()
		cy.get('.datatable-row--add > :nth-child(4) > .datatable-cell-content > .error-message')
		  .should('have.text', `Custodian Name has already been taken.`)
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