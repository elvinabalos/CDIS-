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

  it('Should be able to check validate duplicates bank name and description fields', () => {
    coh.validateDuplicates()
  })

  it('Should be able to check validate required code, bank name, description fields', () => {
    coh.validateRequired()
  })  

  it('Should be able to update cash on hand', () => {
    coh.searchKeyword()
    coh.updateCashOnHand()
  })  

  it.only('Should be able to search cash on hand', () => {
    coh.searchKeyword()
  })

  // it('Should be able to delete bank file', () => {
  //   bankfile.deleteBankFile()  
  // })
})