import { bankFile} from "../../../page-objects/bank-file"

describe('The user should be able to create, update, delete, and search the bank file', () => {
  const bankfile = new bankFile()
  const username = 'superadmin'
  const password = 'superadmin031819'
  let code = '100'
  let bank_name = 'New Bank 1'
  let description = 'Description 1'
  let save_btn = '.row-add'
  let module_name = 'Bank File'

  beforeEach(() => {
	cy.login(username, password)
  })

  it('Should be able to create, update, delete, search, and validations for empty field and duplications', () => {
	cy.visit('/bank-file')

    // Fill in the code, bank name, and description
	bankfile.fillBankFile(code, bank_name, description)

    // Save button  
    cy.save(save_btn, module_name)

	bankfile.validateClearFields(bank_name, description)

	// Validation for duplications
    bankfile.validateDuplicates(bank_name, description, save_btn)

    // Validation for required field/s
    bankfile.validateRequired(save_btn)

	// Search
    cy.search(bank_name)

    // Update
    cy.update(module_name)

	// Delete
    cy.delete(module_name)
  })
})