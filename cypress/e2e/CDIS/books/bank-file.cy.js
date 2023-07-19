import { bankFile} from "../../../page-objects/bank-file"

describe('The user should be able to create, update, delete, and search the bank file', () => {
  const bankfile = new bankFile()
  
  let data;
  before(() => {
    cy.fixture('credentials').then((Data) => {
      data = Data
    })
  })

  beforeEach(() => {
    cy.login(data.admin.username, data.admin.password)
    cy.visit('/bank-file')
  })

  it('Should be able to create bank file', () => {
    bankfile.addBankFile()
  })

  it('Should be able to validate clear code, currenct and description fields', () => {
    bankfile.validateClearFields()
  })

  it('Should be able to check validate duplicates bank name and description fields', () => {
    bankfile.validateDuplicates()
  })

  it('Should be able to check validate required code, bank name, description fields', () => {
    bankfile.validateRequired()
  })  

  it('Should be able to update bank file', () => {
    bankfile.searchKeyword()
    bankfile.updateBankFile()
  })  

  it('Should be able to search bank file', () => {
    bankfile.searchKeyword()
  })

  it('Should be able to delete bank file', () => {
    bankfile.deleteBankFile()  
  })
})