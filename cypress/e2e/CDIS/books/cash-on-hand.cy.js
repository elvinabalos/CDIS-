import { cashOnHand} from "../../../page-objects/cash-on-hand"

describe('The user should be able to create, update, delete, and search the cash on hand', () => {
  const coh = new cashOnHand()

  let data;
  before(() => {
    cy.fixture('credentials').then((Data) => {
      data = Data
    })
  })

  beforeEach(() => {
    cy.login(data.admin.username, data.admin.password)
    cy.visit('/cash-on-hand')
  })

  it('Should be able to create bank file', () => {
    coh.addCashOnHand()
  })

  it('Should be able to validate clear code, currenct and description fields', () => {
    coh.validateClearFields()
  })

  // it('Should be able to check validate duplicates bank name and description fields', () => {
  //   bankfile.validateDuplicates()
  // })

  // it('Should be able to check validate required code, bank name, description fields', () => {
  //   bankfile.validateRequired()
  // })  

  // it('Should be able to update bank file', () => {
  //   bankfile.searchKeyword()
  //   bankfile.updateBankFile()
  // })  

  // it('Should be able to search bank file', () => {
  //   bankfile.searchKeyword()
  // })

  // it('Should be able to delete bank file', () => {
  //   bankfile.deleteBankFile()  
  // })
})